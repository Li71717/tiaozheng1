package com.ideabobo.service;

import com.ideabobo.model.User;
import org.apache.ibatis.annotations.Param;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;
@Mapper
public interface UserMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(User record);

    int insertSelective(User record);

    User selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(User record);

    int updateByPrimaryKey(User record);

    /**
     * 根据用户类型查找用户
     * @param roletype 用户类型字符串
     * @return 用户列表
     */
    List<User> findUsersByRoletype(@Param("roletype") String roletype);

}