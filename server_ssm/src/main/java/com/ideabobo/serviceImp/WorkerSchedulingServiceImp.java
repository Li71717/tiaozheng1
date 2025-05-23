package com.ideabobo.serviceImp;

import com.ideabobo.model.Bill;
import com.ideabobo.model.Good;
import com.ideabobo.model.User;
import com.ideabobo.service.BillMapper;
import com.ideabobo.service.GoodMapper;
import com.ideabobo.service.UserMapper;
import com.ideabobo.service.WorkerSchedulingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.TimeZone;
import java.util.ArrayList;
import java.util.Collections; // For empty list if needed

@Service
public class WorkerSchedulingServiceImp implements WorkerSchedulingService {

    @Autowired
    private BillMapper billMapper;
    @Autowired
    private UserMapper userMapper;
    @Autowired
    private GoodMapper goodMapper;

    // 统一交通时间（小时），可以考虑从配置文件读取或根据服务类型动态调整
    private static final double DEFAULT_TRAVEL_TIME_HOURS = 0.5;

    // 建议设置一个固定的时区，例如服务器部署的时区
    private static final TimeZone APP_TIME_ZONE = TimeZone.getTimeZone("GMT+8"); // 例如中国标准时间

    private SimpleDateFormat getDateTimeFormatter() {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        sdf.setTimeZone(APP_TIME_ZONE);
        return sdf;
    }

    private SimpleDateFormat getShortDateTimeFormatter() {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm");
        sdf.setTimeZone(APP_TIME_ZONE);
        return sdf;
    }

    private SimpleDateFormat getDateFormatter() {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        sdf.setTimeZone(APP_TIME_ZONE);
        return sdf;
    }

    private SimpleDateFormat getTimeFormatter() {
        SimpleDateFormat sdf = new SimpleDateFormat("HH:mm");
        sdf.setTimeZone(APP_TIME_ZONE); // 时间解析也应考虑时区，尽管这里只解析小时和分钟
        return sdf;
    }

    @Override
    public double getDefaultTravelTimeHours() {
        return DEFAULT_TRAVEL_TIME_HOURS;
    }

    @Override
    public Date parseDateTimeString(String dateTimeStr) {
        if (dateTimeStr == null || dateTimeStr.trim().isEmpty()) {
            System.err.println("parseDateTimeString: Input string is null or empty.");
            return null;
        }
        try {
            // 尝试 "yyyy-MM-dd HH:mm:ss"
            if (dateTimeStr.length() == 19) {
                return getDateTimeFormatter().parse(dateTimeStr);
            }
            // 尝试 "yyyy-MM-dd HH:mm"
            else if (dateTimeStr.length() == 16) {
                return getShortDateTimeFormatter().parse(dateTimeStr);
            }
            // 可以根据需要添加对其他可能格式的支持
            else {
                System.err.println("parseDateTimeString: Unrecognized date-time format for string: " + dateTimeStr);
                return null;
            }
        } catch (ParseException e) {
            System.err.println("parseDateTimeString: Error parsing date-time string '" + dateTimeStr + "': " + e.getMessage());
            return null;
        }
    }

    @Override
    public Date addHoursToDate(Date date, double hours) {
        if (date == null) {
            return null;
        }
        Calendar calendar = Calendar.getInstance(APP_TIME_ZONE);
        calendar.setTime(date);
        // 将小时转换为毫秒: hours * 60 minutes/hour * 60 seconds/minute * 1000 ms/second
        long millisToAdd = (long) (hours * 60.0 * 60.0 * 1000.0);
        calendar.setTimeInMillis(calendar.getTimeInMillis() + millisToAdd);
        return calendar.getTime();
    }

    @Override
    public Date calculateWorkerFreeTimeAfterBill(Bill bill, Double serviceDurationHours, Double travelTimeAfterServiceHours) {
        if (bill == null || bill.getYdate() == null) {
            System.err.println("calculateWorkerFreeTimeAfterBill: Bill or yuyuetime is null.");
            return null;
        }
        Date serviceStartTime = parseDateTimeString(bill.getYdate());
        if (serviceStartTime == null) {
            System.err.println("calculateWorkerFreeTimeAfterBill: Could not parse service start time from yuyuetime: " + bill.getYdate());
            return null;
        }

        if (serviceDurationHours == null || serviceDurationHours <= 0) {
            System.err.println("calculateWorkerFreeTimeAfterBill: Invalid service duration: " + serviceDurationHours);
            // 如果没有有效服务时长，至少返回服务开始时间加上交通时间
            return addHoursToDate(serviceStartTime, travelTimeAfterServiceHours != null ? travelTimeAfterServiceHours : 0.0);
        }

        Date serviceEndTime = addHoursToDate(serviceStartTime, serviceDurationHours);
        if (serviceEndTime == null) return null; // Should not happen if serviceStartTime and duration are valid

        return addHoursToDate(serviceEndTime, (travelTimeAfterServiceHours != null ? travelTimeAfterServiceHours : 0.0));
    }

    @Override
    public List<Bill> getWorkerScheduledBillsForDate(Integer workerId, Date date) {
        if (workerId == null || date == null) {
            System.err.println("getWorkerScheduledBillsForDate: workerId or date is null.");
            return Collections.emptyList();
        }
        // User.id 是 Integer, Bill.uid3 是 String. 需要确保类型匹配.
        // 假设 BillMapper 的 workerId 参数是 String (因为 uid3 是 VARCHAR)
        String workerIdStr = String.valueOf(workerId);
        String dateStr = getDateFormatter().format(date);

        try {
            return billMapper.findConfirmedBillsByWorkerAndDate(workerIdStr, dateStr);
        } catch (Exception e) {
            System.err.println("Error fetching scheduled bills for worker " + workerIdStr + " on " + dateStr + ": " + e.getMessage());
            e.printStackTrace();
            return Collections.emptyList();
        }
    }

    @Override
    public boolean isWorkerAvailable(Integer workerId, Date newJobRequestedStartTime, Double newJobServiceDurationHours) {
        if (workerId == null || newJobRequestedStartTime == null || newJobServiceDurationHours == null || newJobServiceDurationHours <= 0) {
            System.err.println("isWorkerAvailable: Invalid input parameters. WorkerId: " + workerId + ", StartTime: " + newJobRequestedStartTime + ", Duration: " + newJobServiceDurationHours);
            return false;
        }

        User worker = userMapper.selectByPrimaryKey(workerId);
        if (worker == null) {
            System.err.println("isWorkerAvailable: Worker not found for ID: " + workerId);
            return false;
        }
        // 确认是工人角色, 假设您的工人 utype 是 "3"
        if (!"3".equals(worker.getRoletype())) {
            System.err.println("isWorkerAvailable: User ID " + workerId + " is not a worker (utype=" + worker.getRoletype() + ").");
            return false;
        }
        /*
        // 1. 检查是否在工人的工作时段内 (work_stime, work_etime)
        String workStimeStr = worker.getWorkStime(); // e.g., "09:00"
        String workEtimeStr = worker.getWorkEtime(); // e.g., "18:00"

        Calendar requestedStartCal = Calendar.getInstance(APP_TIME_ZONE);
        requestedStartCal.setTime(newJobRequestedStartTime);

        Date newJobCalculatedEndTime = addHoursToDate(newJobRequestedStartTime, newJobServiceDurationHours);
        if (newJobCalculatedEndTime == null) return false; // Should not happen

        Calendar requestedEndCal = Calendar.getInstance(APP_TIME_ZONE);
        requestedEndCal.setTime(newJobCalculatedEndTime);

        try {
            if (workStimeStr != null && !workStimeStr.isEmpty()) {
                Date workStartTimeParsed = getTimeFormatter().parse(workStimeStr);
                Calendar workStartCalToday = Calendar.getInstance(APP_TIME_ZONE);
                workStartCalToday.setTime(workStartTimeParsed); // This will have today's date, but we only care about H:M

                // Set workStartCalToday to the date of newJobRequestedStartTime, but with H:M from work_stime
                Calendar checkWorkStartCal = Calendar.getInstance(APP_TIME_ZONE);
                checkWorkStartCal.setTime(newJobRequestedStartTime); // Base date
                checkWorkStartCal.set(Calendar.HOUR_OF_DAY, workStartCalToday.get(Calendar.HOUR_OF_DAY));
                checkWorkStartCal.set(Calendar.MINUTE, workStartCalToday.get(Calendar.MINUTE));
                checkWorkStartCal.set(Calendar.SECOND, 0);
                checkWorkStartCal.set(Calendar.MILLISECOND, 0);

                if (requestedStartCal.before(checkWorkStartCal)) {
                    System.out.println("isWorkerAvailable: Requested start time " + getDateTimeFormatter().format(newJobRequestedStartTime) + " is before worker's shift starts at " + workStimeStr);
                    return false;
                }
            }

            if (workEtimeStr != null && !workEtimeStr.isEmpty()) {
                Date workEndTimeParsed = getTimeFormatter().parse(workEtimeStr);
                Calendar workEndCalToday = Calendar.getInstance(APP_TIME_ZONE);
                workEndCalToday.setTime(workEndTimeParsed);

                Calendar checkWorkEndCal = Calendar.getInstance(APP_TIME_ZONE);
                checkWorkEndCal.setTime(newJobRequestedStartTime); // Base date
                checkWorkEndCal.set(Calendar.HOUR_OF_DAY, workEndCalToday.get(Calendar.HOUR_OF_DAY));
                checkWorkEndCal.set(Calendar.MINUTE, workEndCalToday.get(Calendar.MINUTE));
                checkWorkEndCal.set(Calendar.SECOND, 0);
                checkWorkEndCal.set(Calendar.MILLISECOND, 0);

                // If work end time is like "00:00" it might mean end of day, handle carefully
                // For simplicity, assuming work_etime is within the same day as work_stime
                if (requestedEndCal.after(checkWorkEndCal)) {
                    System.out.println("isWorkerAvailable: Requested end time " + getDateTimeFormatter().format(newJobCalculatedEndTime) + " is after worker's shift ends at " + workEtimeStr);
                    return false;
                }
            }
        } catch (ParseException e) {
            System.err.println("isWorkerAvailable: Error parsing worker's general work hours (stime: " + workStimeStr + ", etime: " + workEtimeStr + "): " + e.getMessage());
            return false; //解析失败，安全起见认为不可用
        }
        */
        // 2. 获取工人当天的已确认订单 (这里 newJobCalculatedEndTime 需要在注释块外部重新计算，或者确保它仍然有效)
        Date newJobCalculatedEndTime = addHoursToDate(newJobRequestedStartTime, newJobServiceDurationHours); // 确保此行存在且未被注释
        if (newJobCalculatedEndTime == null) {
            System.err.println("isWorkerAvailable: Failed to calculate new job end time.");
            return false;
        }

        List<Bill> scheduledBills = getWorkerScheduledBillsForDate(workerId, newJobRequestedStartTime);

        // 3. 遍历已安排订单，检查时间冲突
        // 新任务的服务时段: [newJobRequestedStartTime, newJobCalculatedEndTime)
        for (Bill existingBill : scheduledBills) {
            Date existingBillStartTime = parseDateTimeString(existingBill.getYdate());
            if (existingBillStartTime == null) {
                System.err.println("isWorkerAvailable: Skipping existing bill ID " + existingBill.getId() + " due to unparsable yuyuetime: " + existingBill.getYdate());
                continue;
            }

            // 确保 gids (商品/服务ID) 是 String 类型，并且可以安全地转换为 Integer
            // 假设一个订单目前只关联一个服务ID，存储在 gids 字段中
            String goodIdStr = existingBill.getGids();
            if (goodIdStr == null || goodIdStr.trim().isEmpty()) {
                System.err.println("isWorkerAvailable: Skipping existing bill ID " + existingBill.getId() + " for worker ID " + workerId + " due to missing gids (service IDs).");
                continue;
            }

            Good existingGood = null;
            try {
                // gids 存储的是单个服务的、纯数字的ID字符串。
                existingGood = goodMapper.selectByPrimaryKey(Integer.parseInt(goodIdStr.trim()));
            } catch (NumberFormatException e) {
                // 如果 gids 不是纯数字，或者包含多个ID，这里会抛出异常
                System.err.println("isWorkerAvailable: Invalid gids format for existing bill ID " + existingBill.getId() + ". gids: '" + goodIdStr + "'. Expected a single integer string. Error: " + e.getMessage());
                continue;
            }

            if (existingGood == null) { // 首先检查 good 对象是否为 null
                System.err.println("isWorkerAvailable: Service (Good) not found for gids: '" + goodIdStr + "' from existing bill ID " + existingBill.getId() + " for worker ID " + workerId + ".");
                continue;
            }
            // 然后检查该服务是否有预估时长
            if (existingGood.getEstimatedServiceDurationHours() == null) {
                System.err.println("isWorkerAvailable: Skipping existing bill ID " + existingBill.getId() + " (gids: " + goodIdStr + ") for worker ID " + workerId + " because service duration is not set for this service.");
                continue;
            }

            double existingBillServiceDuration = existingGood.getEstimatedServiceDurationHours();

            // 旧任务工人被占用的时间段: [existingBillStartTime, existingBillFreeTimeAfterIt)
            // existingBillFreeTimeAfterIt = existingBillStartTime + existingBillServiceDuration + DEFAULT_TRAVEL_TIME_HOURS
            Date existingBillOccupiedUntil = calculateWorkerFreeTimeAfterBill(existingBill, existingBillServiceDuration, DEFAULT_TRAVEL_TIME_HOURS);
            if (existingBillOccupiedUntil == null) {
                System.err.println("isWorkerAvailable: Could not calculate occupied_until for existing bill ID " + existingBill.getId());
                continue;
            }


            // 核心冲突检查逻辑:
            // 如果新任务的开始时间在新任务占用结束之前，并且新任务的结束时间在旧任务开始之后，则冲突
            // A. newJobRequestedStartTime < existingBillOccupiedUntil
            // B. newJobCalculatedEndTime > existingBillStartTime
            boolean conflict = newJobRequestedStartTime.before(existingBillOccupiedUntil) &&
                    newJobCalculatedEndTime.after(existingBillStartTime);

            if (conflict) {
                System.out.println("isWorkerAvailable: Conflict detected for worker " + workerId +
                        ". New Job: [" + getDateTimeFormatter().format(newJobRequestedStartTime) + " - " + getDateTimeFormatter().format(newJobCalculatedEndTime) +
                        "] conflicts with existing Bill ID " + existingBill.getId() +
                        " (Occupied: [" + getDateTimeFormatter().format(existingBillStartTime) + " - " + getDateTimeFormatter().format(existingBillOccupiedUntil) + "])");
                return false;
            }
        }
        // System.out.println("isWorkerAvailable: Worker " + workerId + " is available for start time " + getDateTimeFormatter().format(newJobRequestedStartTime) + " with duration " + newJobServiceDurationHours);
        return true; // 没有冲突
    }

    @Override
    public List<User> findAvailableWorkers(Date requestedStartTime, Double serviceDurationHours) {
        if (requestedStartTime == null || serviceDurationHours == null || serviceDurationHours <= 0) {
            System.err.println("findAvailableWorkers: Invalid input parameters.");
            return Collections.emptyList();
        }
        // 假设工人roletype是"3"
        List<User> allWorkers = userMapper.findUsersByRoletype("3"); // <--- 修改方法名
        if (allWorkers == null || allWorkers.isEmpty()) {
            System.out.println("findAvailableWorkers: No workers found with roletype '3'."); // <--- 修改日志信息
            return Collections.emptyList();
        }

        List<User> availableWorkers = new ArrayList<>();
        for (User worker : allWorkers) {
            if (isWorkerAvailable(worker.getId(), requestedStartTime, serviceDurationHours)) {
                availableWorkers.add(worker);
            }
        }
        System.out.println("findAvailableWorkers: Found " + availableWorkers.size() + " available workers for start time " + getDateTimeFormatter().format(requestedStartTime) + " duration " + serviceDurationHours);
        return availableWorkers;
    }
}