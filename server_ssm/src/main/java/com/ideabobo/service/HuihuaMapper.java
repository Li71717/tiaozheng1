package com.ideabobo.service;

import com.ideabobo.model.Huihua;
import org.apache.ibatis.annotations.Mapper;
@Mapper

public interface HuihuaMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Huihua record);

    int insertSelective(Huihua record);

    Huihua selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Huihua record);

    int updateByPrimaryKey(Huihua record);
}