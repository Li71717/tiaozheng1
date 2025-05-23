package com.ideabobo.controller;

import com.ideabobo.model.Bill;
import com.ideabobo.model.Good;
import com.ideabobo.model.User;
import com.ideabobo.service.BillMapper;
import com.ideabobo.service.GoodMapper;
import com.ideabobo.service.UserMapper;
import com.ideabobo.service.WorkerSchedulingService;
// 如果需要统一的成功/失败消息结构，可以考虑引入或自定义一个简单的响应对象，
// 但根据您现有DatabaseController的风格，它经常直接返回数据或简单字符串。
// 为简单起见，我们先直接返回Map或List。

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller; // 使用 @Controller
import org.springframework.web.bind.annotation.*; // 引入 @GetMapping, @PostMapping, @RequestParam 等

import javax.servlet.http.HttpServletRequest; // 仍然可以使用它来获取未明确定义的参数
import java.util.*;
import java.util.stream.Collectors;

@CrossOrigin(origins="*")
@Controller // 与您的 DatabaseController 保持一致
@RequestMapping(value = "/api/admin/dispatch") // 新的根路径给调度相关的API
@ResponseBody // 表示所有方法的返回值都直接写入HTTP响应体
public class AdminDispatchController {

    @Autowired
    private WorkerSchedulingService workerSchedulingService;

    @Autowired
    private BillMapper billMapper;

    @Autowired
    private GoodMapper goodMapper;

    @Autowired
    private UserMapper userMapper;

    /**
     * 尝试将指定订单派给指定工人
     * @param billId 订单ID
     * @param workerId 工人ID (User表中的主键ID)
     * @param req HttpServletRequest (可选，如果还有其他参数需要从中获取)
     * @return Map<String, Object> 作为响应，包含成功/失败信息
     */
    @RequestMapping(value = "/assignOrderToWorker", method = {RequestMethod.POST, RequestMethod.GET}, produces = "application/json; charset=utf-8")
    public Map<String, Object> assignOrderToWorker(@RequestParam Integer billId,
                                                   @RequestParam Integer workerId,
                                                   HttpServletRequest req) {
        Map<String, Object> response = new HashMap<>();
        if (billId == null || workerId == null) {
            response.put("success", false);
            response.put("message", "订单ID和工人ID均不能为空");
            return response;
        }

        Bill bill = billMapper.selectByPrimaryKey(billId);
        if (bill == null) {
            response.put("success", false);
            response.put("message", "订单不存在 (ID: " + billId + ")");
            return response;
        }

        // 【新增】派单前提条件检查：订单状态必须为 "已付款"
        if (!"已付款".equals(bill.getStatecn())) { // 使用 bill.getStatecn() 获取当前状态
            response.put("success", false);
            response.put("message", "订单 (ID: " + billId + ") 当前状态为 '" + bill.getStatecn() + "'，必须为“已付款”状态才能进行派单操作。");
            return response;
        }

        User worker = userMapper.selectByPrimaryKey(workerId);
        if (worker == null) {
            response.put("success", false);
            response.put("message", "工人不存在 (ID: " + workerId + ")");
            return response;
        }
        if (!"3".equals(worker.getRoletype())) { // 工人角色值为 "3"
            response.put("success", false);
            response.put("message", "指定用户 (ID: " + workerId + ") 不是工人角色 (roletype: " + worker.getRoletype() + ")");
            return response;
        }

        // ... (获取 good, serviceDuration, ydateStr, requestedStartTime 的逻辑不变，
        //      确保其中所有 bill.getGids() 和 bill.getYdate() 都已正确) ...
        String goodIdStr = bill.getGids();
        if (goodIdStr == null || goodIdStr.trim().isEmpty()) {
            response.put("success", false);
            response.put("message", "订单 (ID: " + billId + ") 未关联服务 (gids为空)");
            return response;
        }
        Good good;
        try {
            good = goodMapper.selectByPrimaryKey(Integer.parseInt(goodIdStr.trim()));
        } catch (NumberFormatException e) {
            response.put("success", false);
            response.put("message", "订单 (ID: " + billId + ") 关联的服务ID (gids: '" + goodIdStr + "') 格式无效");
            return response;
        }
        if (good == null) { /* ... 错误处理 ... */ response.put("success", false); response.put("message", "未找到订单关联的服务详情 (gids: " + goodIdStr + ")"); return response;}
        if (good.getEstimatedServiceDurationHours() == null || good.getEstimatedServiceDurationHours() <= 0) { /* ... 错误处理 ... */ response.put("success", false); response.put("message", "订单关联的服务 (gids: " + goodIdStr + ") 未配置有效时长"); return response;}
        double serviceDuration = good.getEstimatedServiceDurationHours();
        String ydateStr = bill.getYdate();
        if (ydateStr == null || ydateStr.trim().isEmpty()) { /* ... 错误处理 ... */ response.put("success", false); response.put("message", "订单 (ID: " + billId + ") 未设置预约时间"); return response;}
        Date requestedStartTime = workerSchedulingService.parseDateTimeString(ydateStr);
        if (requestedStartTime == null) { /* ... 错误处理 ... */ response.put("success", false); response.put("message", "订单 (ID: " + billId + ") 的预约时间格式无法解析: " + ydateStr); return response;}


        boolean available = workerSchedulingService.isWorkerAvailable(workerId, requestedStartTime, serviceDuration);

        if (available) {
            bill.setSid(String.valueOf(workerId)); // 使用 setSid 存储工人ID

            bill.setStatecn("已接单");

            // ... (更新计算的时间字段逻辑不变) ...
            bill.setActualServiceStartTime(requestedStartTime);
            bill.setServiceDurationHoursApplied(serviceDuration);
            double travelTime = workerSchedulingService.getDefaultTravelTimeHours();
            bill.setTravelTimeHoursApplied(travelTime);
            Date serviceEndTime = workerSchedulingService.addHoursToDate(requestedStartTime, serviceDuration);
            bill.setActualServiceEndTime(serviceEndTime);
            if (serviceEndTime != null) {
                bill.setWorkerFreeTimeAfterThisBill(workerSchedulingService.addHoursToDate(serviceEndTime, travelTime));
            } else {
                bill.setWorkerFreeTimeAfterThisBill(null);
            }


            int updateResult = billMapper.updateByPrimaryKeySelective(bill);
            if (updateResult > 0) {
                response.put("success", true);
                // 【已修正】更新成功消息中的状态文本
                response.put("message", "派单成功！订单 (ID: " + billId + ") 已成功指派给工人 " + (worker.getUsername() != null ? worker.getUsername() : "ID:"+workerId) + "，状态已更新为 '已分配'。");
                // TODO: 发送通知给工人
            } else {
                response.put("success", false);
                response.put("message", "派单失败：更新订单数据库时出错。");
            }
        } else {
            String workerName = worker.getUsername() != null ? worker.getUsername() : "ID:" + workerId;
            response.put("success", false);
            response.put("message", "派单失败：工人 " + workerName + " 在订单预约时间 ("+ ydateStr +") 内已有安排。请尝试其他工人或调整预约时间。");
        }
        return response;
    }

    /**
     * 为指定订单查找在预约时间内可用的工人列表
     * @param billId 订单ID
     * @param req HttpServletRequest (可选)
     * @return List<Map<String, Object>> 作为响应，包含可用工人列表或错误提示的Map
     */
    @RequestMapping(value = "/findAvailableWorkersForOrder", method = {RequestMethod.GET, RequestMethod.POST}, produces = "application/json; charset=utf-8")
    public Object findAvailableWorkersForOrder(@RequestParam Integer billId, HttpServletRequest req) {
        Map<String, Object> errorResponse = new HashMap<>();
        if (billId == null) {
            errorResponse.put("success", false);
            errorResponse.put("message", "订单ID不能为空");
            return errorResponse;
        }

        Bill bill = billMapper.selectByPrimaryKey(billId);
        if (bill == null) {
            errorResponse.put("success", false);
            errorResponse.put("message", "订单不存在 (ID: " + billId + ")");
            return errorResponse;
        }

        String goodIdStr = bill.getGids(); // 使用 getGids()
        if (goodIdStr == null || goodIdStr.trim().isEmpty()) {
            errorResponse.put("success", false);
            errorResponse.put("message", "订单 (ID: " + billId + ") 未关联服务 (gids为空)");
            return errorResponse;
        }
        Good good = null;
        try {
            good = goodMapper.selectByPrimaryKey(Integer.parseInt(goodIdStr.trim()));
        } catch (NumberFormatException e) {
            errorResponse.put("success", false);
            errorResponse.put("message", "订单 (ID: " + billId + ") 关联的服务ID (gids: '" + goodIdStr + "') 格式无效");
            return errorResponse;
        }

        if (good == null) {
            errorResponse.put("success", false);
            errorResponse.put("message", "未找到订单 (ID: " + billId + ") 关联的服务详情 (gids: " + goodIdStr + ")");
            return errorResponse;
        }
        if (good.getEstimatedServiceDurationHours() == null || good.getEstimatedServiceDurationHours() <= 0) {
            errorResponse.put("success", false);
            errorResponse.put("message", "订单 (ID: " + billId + ") 关联的服务 (gids: " + goodIdStr + ") 未配置有效的预计时长");
            return errorResponse;
        }
        double serviceDuration = good.getEstimatedServiceDurationHours();

        String ydateStr = bill.getYdate(); // 使用 getYdate()
        if (ydateStr == null || ydateStr.trim().isEmpty()) {
            errorResponse.put("success", false);
            errorResponse.put("message", "订单 (ID: " + billId + ") 未设置预约时间 (ydate为空)");
            return errorResponse;
        }
        Date requestedStartTime = workerSchedulingService.parseDateTimeString(ydateStr);
        if (requestedStartTime == null) {
            errorResponse.put("success", false);
            errorResponse.put("message", "订单 (ID: " + billId + ") 的预约时间格式无法解析: " + ydateStr);
            return errorResponse;
        }

        List<User> availableWorkersFull = workerSchedulingService.findAvailableWorkers(requestedStartTime, serviceDuration);

        if (availableWorkersFull.isEmpty()) {
            Map<String, Object> noWorkersResponse = new HashMap<>();
            noWorkersResponse.put("success", true); // 操作本身是成功的，只是结果为空
            noWorkersResponse.put("message", "该订单的预约时间 ("+ ydateStr +") 内暂无可用工人。");
            noWorkersResponse.put("data", new ArrayList<>()); // 返回空列表
            return noWorkersResponse;
        } else {
            List<Map<String, Object>> availableWorkersSimple = availableWorkersFull.stream().map(worker -> {
                Map<String, Object> workerInfo = new HashMap<>();
                workerInfo.put("id", worker.getId());
                workerInfo.put("username", worker.getUsername());
                // workerInfo.put("fname", worker.getFname()); // 可以用真实姓名fname
                // workerInfo.put("tel", worker.getTel()); // 按需添加
                return workerInfo;
            }).collect(Collectors.toList());

            Map<String, Object> successResponse = new HashMap<>();
            successResponse.put("success", true);
            successResponse.put("message", "查询成功");
            successResponse.put("data", availableWorkersSimple);
            return successResponse;
        }
    }
}