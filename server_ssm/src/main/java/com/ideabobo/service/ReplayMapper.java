package com.ideabobo.service;

import com.ideabobo.model.Replay;
import org.apache.ibatis.annotations.Mapper;
@Mapper
public interface ReplayMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Replay record);

    int insertSelective(Replay record);

    Replay selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Replay record);

    int updateByPrimaryKey(Replay record);
}