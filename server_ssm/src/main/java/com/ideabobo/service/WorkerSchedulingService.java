package com.ideabobo.service;

import com.ideabobo.model.Bill;
import com.ideabobo.model.User;
import java.util.Date;
import java.util.List;

public interface WorkerSchedulingService {

    /**
     * 检查指定工人在请求的时间是否可用
     * @param workerId 工人ID (对应 User 表的 id)
     * @param requestedStartTime 新服务的请求开始时间 (Date 对象)
     * @param newServiceDurationHours 新服务的预计时长 (小时)
     * @return 如果可用则返回true，否则返回false。包含对工人工作时间段和已安排订单的检查。
     */
    boolean isWorkerAvailable(Integer workerId, Date requestedStartTime, Double newServiceDurationHours);

    /**
     * 计算工人完成指定订单（包括服务和后续交通）后的预计空闲时间
     * @param bill 订单对象，需要包含 yuyuetime 和 goodid
     * @param serviceDurationHours 此订单的服务时长
     * @param travelTimeAfterServiceHours 此订单服务完成 *之后* 的交通时间
     * @return 预计空闲时间点 (Date 对象)
     */
    Date calculateWorkerFreeTimeAfterBill(Bill bill, Double serviceDurationHours, Double travelTimeAfterServiceHours);

    /**
     * 查找在指定时间点和指定服务时长内，所有可用的工人列表
     * @param requestedStartTime 请求的服务开始时间 (Date 对象)
     * @param serviceDurationHours 服务时长 (小时)
     * @return 可用工人列表 (User对象)
     */
    List<User> findAvailableWorkers(Date requestedStartTime, Double serviceDurationHours);

    /**
     * 获取工人指定日期已安排的订单信息，用于判断忙碌时段
     * @param workerId 工人ID
     * @param date 指定日期 (Date 对象, 只用其日期部分)
     * @return 订单列表
     */
    List<Bill> getWorkerScheduledBillsForDate(Integer workerId, Date date);


    /**
     * 将字符串形式的预约时间解析为 Date 对象
     * @param dateTimeStr 预约时间字符串
     * @return Date 对象，如果解析失败则返回 null
     */
    Date parseDateTimeString(String dateTimeStr);

    /**
     * 给指定Date对象增加指定的小时数
     * @param date 基础Date对象
     * @param hours 要增加的小时数 (可以是小数)
     * @return 增加小时数后的新Date对象
     */
    Date addHoursToDate(Date date, double hours);

    /**
     * 获取默认的交通时间（小时）
     * @return double
     */
    double getDefaultTravelTimeHours();
}