package com.ideabobo.service;

import com.ideabobo.model.Good;
import org.apache.ibatis.annotations.Mapper;
@Mapper
public interface GoodMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Good record);

    int insertSelective(Good record);

    Good selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Good record);

    int updateByPrimaryKey(Good record);
}