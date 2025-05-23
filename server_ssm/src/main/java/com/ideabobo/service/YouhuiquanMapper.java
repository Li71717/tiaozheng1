package com.ideabobo.service;

import com.ideabobo.model.Youhuiquan;
import org.apache.ibatis.annotations.Mapper;
@Mapper
public interface YouhuiquanMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Youhuiquan record);

    int insertSelective(Youhuiquan record);

    Youhuiquan selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Youhuiquan record);

    int updateByPrimaryKey(Youhuiquan record);
}