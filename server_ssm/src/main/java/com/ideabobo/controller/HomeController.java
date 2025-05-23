package com.ideabobo.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
@Controller
@RequestMapping(value = "/home")
public class HomeController {    
    // 处理 "/home/setSession" 请求，支持GET和POST方法，返回文本格式，字符编码为UTF-8
    @RequestMapping(value = "/setSession", produces = "text/plain; charset=utf-8", method = { RequestMethod.GET,
			RequestMethod.POST })
    @ResponseBody
    public String setSession(HttpServletRequest req) {
        // 获取当前会话的HttpSession对象
    	HttpSession session = req.getSession();
        // 从请求参数中获取键
    	String key = req.getParameter("key");
        // 从请求参数中获取值
    	String value = req.getParameter("value");
        // 将键值对存储到会话中
    	session.setAttribute(key, value);
    	
        // 返回null，表示没有返回内容
    	return null;
    }
    
    // 处理 "/home/getSession" 请求，支持GET和POST方法，返回文本格式，字符编码为UTF-8
    @RequestMapping(value = "/getSession", produces = "text/plain; charset=utf-8", method = { RequestMethod.GET,
			RequestMethod.POST })
    @ResponseBody
    public String getSession(HttpServletRequest req) {
        // 获取当前会话的HttpSession对象
    	HttpSession session = req.getSession();
        // 从请求参数中获取键
    	String key = req.getParameter("key");
        // 从会话中获取对应的值，如果不存在则返回null
    	String value = session.getAttribute(key)==null?null:session.getAttribute(key).toString();
        // 返回获取到的值
    	return value;
    }
    
}