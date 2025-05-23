package com.ideabobo.service;

import com.ideabobo.model.Bill;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Mapper;// 确保导入了 @Param

import java.util.List;
@Mapper
public interface BillMapper {

    int deleteByPrimaryKey(Integer id);

    int insert(Bill record);

    int insertSelective(Bill record);

    Bill selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Bill record);

    int updateByPrimaryKey(Bill record);

    /**
     * 根据工人和日期查询已确认的订单
     * @param workerId 工人ID (对应 uid3 字段，其在数据库中为VARCHAR，所以参数类型为String)
     * @param dateStr  日期字符串 (格式 yyyy-MM-dd)
     * @return 订单列表
     */
    List<Bill> findConfirmedBillsByWorkerAndDate(@Param("workerId") String workerId, @Param("dateStr") String dateStr);
}