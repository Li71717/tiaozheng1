package com.ideabobo.controller;

import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import cn.hutool.http.HttpUtil;
import cn.hutool.json.JSONObject;
import com.ideabobo.util.*;
import com.ideabobo.util.wxlogin.WxLoginUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.ResourceUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.alibaba.fastjson.JSON;
import com.ideabobo.model.Dbservice;
import com.ideabobo.model.Dbtablemapping;
import com.ideabobo.service.DatabaseService;
import org.yaml.snakeyaml.util.UriEncoder;

@CrossOrigin(origins="*") // 允许所有来源的跨域请求
@Controller // 标记该类为Spring MVC的控制器
@RequestMapping(value = "/database") // 设置该控制器的根路径为/database
public class DatabaseController {
    //private static final Logger logger = Logger.getLogger(DatabaseController.class); // 注释掉的日志记录器
    @Autowired // 自动注入DatabaseService实例
	private DatabaseService databaseService;

	/**
	 * 获取数据库某个表的列表数据
	 * @param req HttpServletRequest请求对象
	 * @return 返回表的列表数据
	 */
	@RequestMapping(value = "/list", produces = "application/json; charset=utf-8", method = { RequestMethod.GET,
			RequestMethod.POST }) // 设置该方法的请求路径和响应类型
    @ResponseBody // 表示该方法的返回值直接作为HTTP响应体返回
    public List<Map<String,Object>> list(HttpServletRequest req) {
		//实例化一个Dbservice对象来操作数据库
    	Dbservice dbm = new Dbservice(databaseService);
    	//获取传输过来的表名然后通过表前缀转换成真实的表名
    	String table = Dbservice.getTableName(req.getParameter("table"));
    	//通过表明实例话一个数据表对象
    	Object tableObj = Dbtablemapping.getModelByTable(table);
    	if (tableObj==null){
    		return null; // 如果表对象为空，返回null
		}
    	//用前端传过来的数据来填充数据表对象
    	Object objectObj = Common.getByRequest(tableObj, req, false);
    	//Robj robj = new Robj();
		//定义一个空的列表用来接收数据库查询的数据
    	List<Map<String,Object>> list = null;
    	try {
    		//准备排序语句
			String ordersql = null;
			String sort = req.getParameter("sort");
			String order = req.getParameter("order");
			//用前端传过来的参数组装排序语句
			if (StringUtil.isNotNullOrEmpty(order)&&StringUtil.isNotNullOrEmpty(sort)){
				ordersql = " order by "+sort+" "+order;
			}
    		//通过数据库实例,和数据表对象来组装的到一个sql语句
			String sql = dbm.list(table,objectObj,ordersql);
			//通过执行sql语句得到数据集
			list = databaseService.find(sql);
		} catch (Exception e) {
			
			e.printStackTrace(); // 打印异常信息
		}
    	//把数据集返回到前端
        return list;
	}

	/**
	 * 调用list接口一致只是返回方式不一样
	 * @param req HttpServletRequest请求对象
	 * @return 返回表的列表数据，以JSONP格式返回
	 */
	@RequestMapping(value = "/listJ", produces = "text/plain; charset=utf-8", method = { RequestMethod.GET,
			RequestMethod.POST }) // 设置该方法的请求路径和响应类型
    @ResponseBody // 表示该方法的返回值直接作为HTTP响应体返回
    public String listJ(HttpServletRequest req) {
    	List<Map<String,Object>> list = list(req); // 调用list方法获取数据
        return renderJsonp(list, req); // 将数据转换为JSONP格式返回
    }

	/**
	 *查询一个数据库集,操作方式和list接口一直,区别在于这里返回的是单个对象
	 * @param req HttpServletRequest请求对象
	 * @return 返回单个对象的数据
	 */
	@RequestMapping(value = "/find", produces = "application/json; charset=utf-8", method = { RequestMethod.GET,
			RequestMethod.POST }) // 设置该方法的请求路径和响应类型
    @ResponseBody // 表示该方法的返回值直接作为HTTP响应体返回
    public Map<String,Object> find(HttpServletRequest req) {
    	Dbservice dbm = new Dbservice(databaseService);
    	String table = Dbservice.getTableName(req.getParameter("table"));
    	Object objectObj = Common.getByRequest(Dbtablemapping.getModelByTable(table), req, false);
    	//Robj robj = new Robj();
    	List<Map<String,Object>> list = null;
    	try {
			String sql = dbm.list(table,objectObj,true);
			list = databaseService.find(sql);
		} catch (Exception e) {
			
			e.printStackTrace(); // 打印异常信息
		}
    	if (list!=null && list.size()>0) {
    		return list.get(0); // 返回第一个对象
		}else{
			return null; // 如果列表为空，返回null
		}
        
    }

	/**
	 * 调用findj通过jsonp返回给客户端
	 * @param req HttpServletRequest请求对象
	 * @return 返回单个对象的数据，以JSONP格式返回
	 */
	@RequestMapping(value = "/findJ", produces = "text/plain; charset=utf-8", method = { RequestMethod.GET,
			RequestMethod.POST }) // 设置该方法的请求路径和响应类型
    @ResponseBody // 表示该方法的返回值直接作为HTTP响应体返回
    public String findJ(HttpServletRequest req) {
		return renderJsonp(find(req), req); // 调用find方法获取数据并转换为JSONP格式返回
    }

	/**
	 * 分页查询数据
	 * @param req HttpServletRequest请求对象
	 * @return 返回分页对象
	 */
	@RequestMapping(value = "/listPage", produces = "application/json; charset=utf-8", method = { RequestMethod.GET,
			RequestMethod.POST }) // 设置该方法的请求路径和响应类型
    @ResponseBody // 表示该方法的返回值直接作为HTTP响应体返回
    public Page listPage(HttpServletRequest req) {
		//实例化一个Dbservice对象来操作数据库
    	Dbservice dbm = new Dbservice(databaseService);
		//获取传输过来的表名然后通过表前缀转换成真实的表名
    	String table = Dbservice.getTableName(req.getParameter("table"));
    	//实例化一个page对象
    	Page page = new Page();
    	//Robj robj = new Robj();
    	try {
			//通过表明实例话一个数据表对象
    		Object model = Common.getByRequest(Dbtablemapping.getModelByTable(table), req, false);
    		page.model = model;
    		//获取排序字段
    		String order = req.getParameter("order");
    		//获取排序方式
			String sort = req.getParameter("sort");
			//获取显示第几页
			String pageNo = req.getParameter("page");
			//获取每页显示多少数据
			String pageSize = req.getParameter("rows");
			if (pageSize==null || pageSize.equals("")){
				pageSize = req.getParameter("limit");
			}
			//调用数据库工具返回page对象
			page = dbm.getByPage(page, table,sort,order,pageNo,pageSize);
	    	//robj.setData(page);
		} catch (Exception e) {
			
			e.printStackTrace(); // 打印异常信息
		}  	
        return page;
    }

	/**
	 * 通过sql语句返回分页对象
	 * @param req HttpServletRequest请求对象
	 * @return 返回分页对象
	 */
	@RequestMapping(value = "/listPageSql", produces = "application/json; charset=utf-8", method = { RequestMethod.GET,
			RequestMethod.POST }) // 设置该方法的请求路径和响应类型
	@ResponseBody // 表示该方法的返回值直接作为HTTP响应体返回
	public Page listPageSql(HttpServletRequest req) {
		//实例化一个Dbservice对象来操作数据库
		Dbservice dbm = new Dbservice(databaseService);
		//获取前端传过来的查询语句
		String sql = req.getParameter("sql");
		//实例化一个page对象
		Page page = new Page();
		//Robj robj = new Robj();
		try {
			page.model = "sql";
			//获取排序字段
			String order = req.getParameter("order");
			//获取排序方式
			String sort = req.getParameter("sort");
			//获取显示第几页
			String pageNo = req.getParameter("page");
			//获取每页显示多少数据
			String pageSize = req.getParameter("rows");
			if (pageSize==null || pageSize.equals("")){
				pageSize = req.getParameter("limit");
			}
			//调用数据库工具返回page对象
			page = dbm.getByPageSql(page, sql,sort,order,pageNo,pageSize);
			//robj.setData(page);
		} catch (Exception e) {

			e.printStackTrace(); // 打印异常信息
		}
		return page;
	}

	/**
	 * 通listPage返回jsonp数据
	 * @param req HttpServletRequest请求对象
	 * @return 返回分页对象，以JSONP格式返回
	 */
	@RequestMapping(value = "/listPageJ", produces = "text/plain; charset=utf-8", method = { RequestMethod.GET,
			RequestMethod.POST }) // 设置该方法的请求路径和响应类型
    @ResponseBody // 表示该方法的返回值直接作为HTTP响应体返回
    public String listPageJ(HttpServletRequest req) {
    	Dbservice dbm = new Dbservice(databaseService);
    	String table = Dbservice.getTableName(req.getParameter("table"));
    	Page page = new Page();
    	//Robj robj = new Robj();
    	try {
    		Object model = Common.getByRequest(Dbtablemapping.getModelByTable(table), req, false);
    		page.model = model;
			page = dbm.getByPage(page, table,null,null,null,null);
	    	//robj.setData(page);
		} catch (Exception e) {
			
			e.printStackTrace(); // 打印异常信息
		}  	
        return renderJsonp(page, req); // 将分页对象转换为JSONP格式返回
    }

	/**
	 * 保存数据的同上传文件
	 * @param files 上传的文件数组
	 * @param req HttpServletRequest请求对象
	 * @return 返回操作结果
	 */
	@RequestMapping(value = "/saveWithFile", produces = "text/plain; charset=utf-8", method = { RequestMethod.GET,
			RequestMethod.POST }) // 设置该方法的请求路径和响应类型
    @ResponseBody // 表示该方法的返回值直接作为HTTP响应体返回
    public String saveWithFile(@RequestParam(value = "file", required = false) MultipartFile[] files,HttpServletRequest req) {
    	Dbservice dbm = new Dbservice(databaseService);
		String rstr = "0"; // 初始化返回结果为0
    	try {
    		//判断文件域里面是否又文件,有文件就上传然后得到文件名
    		String fileNames=null;
    		if(files!=null && files.length>0){
    			long fn = files[0].getSize();
    			if(fn>1){
    				fileNames = Common.copyFile2Upload(files); // 上传文件并获取文件名
    			}
    			
    		}
    		String tableReq = req.getParameter("table");
    		String fileField = req.getParameter("fileName");
			//获取传输过来的表名然后通过表前缀转换成真实的表名
        	String table = Dbservice.getTableName(tableReq);
			//通过表明实例话一个数据表对象
        	Object model = Common.getByRequestSetfile(Dbtablemapping.getModelByTable(table),fileField,fileNames, req, false);
			//通过数据库实例,和数据表对象来组装的到一个sql语句
    		String sql = dbm.save(model, table);
    		//执行sql语句操作数据库
    		databaseService.executeAction(sql);
			/**
			 * 判断是否插入操作,如果是返回插入的id
			 */
			String id = req.getParameter("id");

			if(id==null || id.equals("")){
				List<Map<String, Object>> rlist = databaseService.find("select LAST_INSERT_ID() as lastId");
				if(rlist!=null){
					rstr = rlist.get(0).get("lastId")+"";
				}
			}else{
				rstr = id;
			}
		} catch (Exception e) {
			
			return "操作失败"+e.getMessage(); // 返回操作失败信息
		}
    	
    	return rstr;
        
    }

	/**
	 * 上传文件
	 * @param files 上传的文件数组
	 * @param req HttpServletRequest请求对象
	 * @return 返回上传的文件名
	 */
	@RequestMapping(value = "/upload", produces = "text/plain; charset=utf-8", method = { RequestMethod.GET,
			RequestMethod.POST, RequestMethod.OPTIONS }) // 设置该方法的请求路径和响应类型
    @ResponseBody // 表示该方法的返回值直接作为HTTP响应体返回
    public String upload(@RequestParam(value = "file", required = false) MultipartFile[] files,HttpServletRequest req) {
    	String fileNames=null;
    	try {
    		if(files!=null && files.length>0){
    			fileNames = Common.copyFile2Upload(files); // 上传文件并获取文件名
    		}
    		
		} catch (Exception e) {
		}
    	return fileNames;
        
    }

	/**
	 * 按照编辑器的格式上传视频
	 * @param files 上传的文件数组
	 * @param req HttpServletRequest请求对象
	 * @return 返回上传的视频信息
	 */
	@RequestMapping(value = "/editorUploadVideo", produces = "text/plain; charset=utf-8", method = { RequestMethod.GET,
			RequestMethod.POST }) // 设置该方法的请求路径和响应类型
	@ResponseBody // 表示该方法的返回值直接作为HTTP响应体返回
	public String editorUploadVideo(@RequestParam(value = "file", required = false) MultipartFile[] files,HttpServletRequest req) {
		String fileNames=null;
		String jsonobj = null;
		try {
			if(files!=null && files.length>0){
				fileNames = Common.copyFile2Upload(files); // 上传文件并获取文件名
				ArrayList<String> nl = new ArrayList<String>();
				String[] fns = fileNames.split(",");
				String url = "upload/"+fns[0];
				jsonobj = "{\"errno\":0,\"data\":{\"url\":\""+url+"\"}}"; // 构造JSONP格式的返回数据
			}

		} catch (Exception e) {
		}
		return jsonobj;

	}
	/**
	 * 按照编辑器的格式上传视频
	 * @param files 上传的文件数组
	 * @param req HttpServletRequest请求对象
	 * @return 返回上传的视频信息
	 */
	@RequestMapping(value = "/editorUploadVideoJ", produces = "text/plain; charset=utf-8", method = { RequestMethod.GET,
			RequestMethod.POST }) // 设置该方法的请求路径和响应类型
	@ResponseBody // 表示该方法的返回值直接作为HTTP响应体返回
	public String editorUploadVideoJ(@RequestParam(value = "file", required = false) MultipartFile[] files,HttpServletRequest req) {
		String fileNames=null;
		String jsonobj = null;
		try {
			if(files!=null && files.length>0){
				fileNames = Common.copyFile2Upload(files); // 上传文件并获取文件名
				ArrayList<String> nl = new ArrayList<String>();
				String[] fns = fileNames.split(",");
				String url = fns[0];
				jsonobj = "{\"errno\":0,\"data\":{\"url\":\""+url+"\"}}"; // 构造JSONP格式的返回数据
			}

		} catch (Exception e) {
		}
		return jsonobj;

	}

	/**
	 * 按照编辑器的格式上传图片
	 * @param files 上传的文件数组
	 * @param req HttpServletRequest请求对象
	 * @return 返回上传的图片信息
	 */
	@RequestMapping(value = "/editorUpload", produces = "text/plain; charset=utf-8", method = { RequestMethod.GET,
			RequestMethod.POST }) // 设置该方法的请求路径和响应类型
	@ResponseBody // 表示该方法的返回值直接作为HTTP响应体返回
	public String editorUpload(@RequestParam(value = "file", required = false) MultipartFile[] files,HttpServletRequest req) {
		String fileNames=null;
		EditorUpload eu = new EditorUpload();
		eu.setErrno(0);
		try {
			if(files!=null && files.length>0){
				fileNames = Common.copyFile2Upload(files); // 上传文件并获取文件名
				ArrayList<String> nl = new ArrayList<String>();
				String[] fns = fileNames.split(",");
				for (int i = 0; i < fns.length; i++) {
					nl.add("upload/"+fns[i]);
				}
				eu.setData(nl); // 设置上传的图片URL列表
			}

		} catch (Exception e) {
		}
		return JSON.toJSONString(eu); // 将上传的图片信息转换为JSON格式返回

	}
	/**
	 * 按照编辑器的格式上传图片
	 * @param files 上传的文件数组
	 * @param req HttpServletRequest请求对象
	 * @return 返回上传的图片信息
	 */
	@RequestMapping(value = "/editorUploadJ", produces = "text/plain; charset=utf-8", method = { RequestMethod.GET,
			RequestMethod.POST }) // 设置该方法的请求路径和响应类型
	@ResponseBody // 表示该方法的返回值直接作为HTTP响应体返回
	public String editorUploadJ(@RequestParam(value = "file", required = false) MultipartFile[] files,HttpServletRequest req) {
		String fileNames=null;
		EditorUpload eu = new EditorUpload();
		eu.setErrno(0);
		try {
			if(files!=null && files.length>0){
				fileNames = Common.copyFile2Upload(files); // 上传文件并获取文件名
				ArrayList<String> nl = new ArrayList<String>();
				String[] fns = fileNames.split(",");
				for (int i = 0; i < fns.length; i++) {
					nl.add(fns[i]);
				}
				eu.setData(nl); // 设置上传的图片URL列表
			}

		} catch (Exception e) {
		}
		return JSON.toJSONString(eu); // 将上传的图片信息转换为JSON格式返回

	}

	/**
	 * 工具方法,可以生成二维码
	 * @param req HttpServletRequest请求对象
	 * @return 返回生成的二维码文件名
	 */
	@RequestMapping(value = "/createQrcode", produces = "text/plain; charset=utf-8", method = { RequestMethod.GET,
			RequestMethod.POST }) // 设置该方法的请求路径和响应类型
    @ResponseBody // 表示该方法的返回值直接作为HTTP响应体返回
    public String createQrcode(HttpServletRequest req) {
    	String fileNames="";
    	try {
    		String path = ResourceUtils.getURL("classpath:").getPath();
            String destPath = path+File.separator+"static"+File.separator+"upload"+File.separator;
            String content = req.getParameter("code");
        	fileNames=QRCodeUtil.encode(content, null, destPath, true); // 生成二维码并获取文件名
		} catch (Exception e) {
			
		}
    	return fileNames;
        
    }
	/**
	 * 工具方法,可以生成二维码
	 * @param req HttpServletRequest请求对象
	 * @return 返回生成的二维码文件名
	 */
    @RequestMapping(value = "/createQrcodeJ", produces = "text/plain; charset=utf-8", method = { RequestMethod.GET,
			RequestMethod.POST })
    @ResponseBody
    public String createQrcodeJ(HttpServletRequest req) {
    	String fileNames="";
    	try {
    		String path = ResourceUtils.getURL("classpath:").getPath();
            String destPath = path+File.separator+"static"+File.separator+"upload"+File.separator;
            String content = req.getParameter("code");
        	fileNames=QRCodeUtil.encode(content, null, destPath, true);
		} catch (Exception e) {
			
		}
    	return renderJsonpString(fileNames, req);
    }

	/**
	 * 返回jsonp格式数据字符串
	 * @param str
	 * @param req
	 * @return
	 */
    private String renderJsonpString(String str,HttpServletRequest req){
    	Map<String,String> obj = new HashMap<>();
		obj.put("info", str);
		String callbackFunctionName = req.getParameter("callback");	
		String json = JSON.toJSONString(obj);
		String r = callbackFunctionName+"("+json+")";
		return r;
    }

	/**
	 * 返回jsonp格式对象
	 * @param obj
	 * @param req
	 * @return
	 */
	private String renderJsonp(Object obj,HttpServletRequest req){
		String callbackFunctionName = req.getParameter("callback");	
		String json = JSON.toJSONString(obj);
		String r = callbackFunctionName+"("+json+")";
		return r;
    }

	/**
	 * 执行更新的sql语句
	 * @param req
	 * @return
	 */
	@RequestMapping(value = "/updateSqlJ", produces = "text/plain; charset=utf-8", method = { RequestMethod.GET,
			RequestMethod.POST })
    @ResponseBody
    public String updateSqlJ(HttpServletRequest req) {
    	String sql = req.getParameter("sql");
    	try {
    		databaseService.executeAction(sql);
		} catch (Exception e) {
			
			return renderJsonpString("0", req);
		}
    	
    	return renderJsonpString("1", req);
        
    }


	/**
	 * 执行查询的sql语句
	 * @param req
	 * @return
	 */
	@RequestMapping(value = "/listSqlJ", produces = "text/plain; charset=utf-8", method = { RequestMethod.GET,
			RequestMethod.POST })
    @ResponseBody
    public String listSqlJ(HttpServletRequest req) {
    	String sql = req.getParameter("sql");
    	List<Map<String,Object>> list = null;
    	try {
			list = databaseService.find(sql);
		} catch (Exception e) {
			
			e.printStackTrace();
		}  	
        return renderJsonp(list, req);
    }
    
    
    @RequestMapping(value = "/updateSql", produces = "text/plain; charset=utf-8", method = { RequestMethod.GET,
			RequestMethod.POST })
    @ResponseBody
    public String updateSql(HttpServletRequest req) {
    	String sql = req.getParameter("sql");
    	try {
    		databaseService.executeAction(sql);
		} catch (Exception e) {
			
			return "操作失败"+e.getMessage();
		}
    	
    	return "操作成功";
        
    }

	@RequestMapping(value = "/listSql", produces = "application/json; charset=utf-8", method = { RequestMethod.GET,
			RequestMethod.POST })
	@ResponseBody
	public List<Map<String,Object>> listSql(HttpServletRequest req) {
		String sql = req.getParameter("sql");

		List<Map<String,Object>> list = null;
		try {
			if (sql!=null && sql.length()>0){
				sql = UriEncoder.decode(sql);
				list = databaseService.find(sql);
			}
		} catch (Exception e) {

			e.printStackTrace();
		}
		return list;
	}

	/**
	 * 保存数据
	 * @param req
	 * @return
	 */
    @RequestMapping(value = "/save", produces = "text/plain; charset=utf-8", method = { RequestMethod.GET,
			RequestMethod.POST })
    @ResponseBody
    public String save(HttpServletRequest req) {
    	//实例化一个数据库操作工具实例
    	Dbservice dbm = new Dbservice(databaseService);
    	//Robj robj = new Robj();
    	String tableReq = req.getParameter("table");
		//获取传输过来的表名然后通过表前缀转换成真实的表名
    	String table = Dbservice.getTableName(tableReq);
		//通过表明实例话一个数据表对象
    	Object model = Common.getByRequest(Dbtablemapping.getModelByTable(table), req, false);
    	String rstr = "";
    	try {
			//通过数据库实例,和数据表对象来组装的到一个sql语句
    		String sql = dbm.save(model, table);
    		databaseService.executeAction(sql);
			/**
			 * 判断是否插入操作,如果是返回插入的id
			 */
			String id = req.getParameter("id");

			if(id==null || id.equals("")){
				List<Map<String, Object>> rlist = databaseService.find("select LAST_INSERT_ID() as lastId");
				if(rlist!=null){
					rstr = rlist.get(0).get("lastId")+"";
				}
			}else{
				rstr = id;
			}
		} catch (Exception e) {
			
			return "操作失败"+e.getMessage();
		}
    	
    	return rstr;
        
    }

	/**
	 * 通save方法,返回jsonp格式
	 * @param req
	 * @return
	 */
	@RequestMapping(value = "/saveJ", produces = "text/plain; charset=utf-8", method = { RequestMethod.GET,
			RequestMethod.POST })
    @ResponseBody
    public String saveJ(HttpServletRequest req) {
    	String rstr = save(req);
    	return renderJsonpString(rstr, req);
    }

    
    @RequestMapping(value = "/delete", produces = "text/plain; charset=utf-8", method = { RequestMethod.GET,
			RequestMethod.POST })
    @ResponseBody
    public String delete(HttpServletRequest req) {
    	Dbservice dbm = new Dbservice(databaseService);
    	//Robj robj = new Robj();
    	String table = Dbservice.getTableName(req.getParameter("table"));
    	Object model = Common.getByRequest(Dbtablemapping.getModelByTable(table), req, false);
		try {
    		String sql = dbm.delete(table,model);
    		databaseService.executeAction(sql);
		} catch (Exception e) {
			return "操作失败"+e.getMessage();
		}
    	
    	return "操作成功";
    }

    @RequestMapping(value = "/deleteJ", produces = "text/plain; charset=utf-8", method = { RequestMethod.GET,
			RequestMethod.POST })
    @ResponseBody
    public String deleteJ(HttpServletRequest req) {
    	delete(req);
    	return renderJsonpString("1", req);
    }

	/**
	 * 获取登录的用户信息
	 * @param req
	 * @return
	 */
	@RequestMapping(value = "/getUserInfo", produces = "application/json; charset=utf-8", method = {RequestMethod.GET,
            RequestMethod.POST})
    @ResponseBody
    public Map<String, Object> getUserInfo(HttpServletRequest req) {
        Dbservice dbm = new Dbservice(databaseService);
        String table = Dbservice.getTableName("user");
        Object objectObj = Common.getByRequest(Dbtablemapping.getModelByTable(table), req, false);
        //Robj robj = new Robj();
        List<Map<String, Object>> list = null;
        try {
            String sql = dbm.list(table, objectObj, true);
            list = databaseService.find(sql);
        } catch (Exception e) {

            e.printStackTrace();
        }
        if (list != null && list.size() > 0) {
            Map<String, Object> userinfo = list.get(0);
            userinfo.put("roles", userinfo.get("roletype").toString());
            return userinfo;
        } else {
            return null;
        }

    }

	/**
	 * 登录方法
	 * @param req
	 * @return
	 */
	@RequestMapping(value = "/login", produces = "application/json; charset=utf-8", method = {RequestMethod.GET,
            RequestMethod.POST})
    @ResponseBody
    public Map<String, Object> login(HttpServletRequest req) {
        Dbservice dbm = new Dbservice(databaseService);
        String table = Dbservice.getTableName("user");
        Object objectObj = Common.getByRequest(Dbtablemapping.getModelByTable(table), req, false);
        //Robj robj = new Robj();
        List<Map<String, Object>> list = null;
        try {
            String sql = dbm.list(table, objectObj, true);
            list = databaseService.find(sql);
        } catch (Exception e) {

            e.printStackTrace();
        }
        if (list != null && list.size() > 0) {
            Map<String, Object> userinfo = list.get(0);
            userinfo.put("token", userinfo.get("id").toString());
            return userinfo;
        } else {
            return null;
        }

    }

	/**
	 * 注销登录方法
	 * @param req
	 * @return
	 */
	@RequestMapping(value = "/logout", produces = "application/json; charset=utf-8", method = {RequestMethod.GET,
            RequestMethod.POST})
    @ResponseBody
    public Map<String, Object> logout(HttpServletRequest req) {
        Map<String, Object> r = new HashMap<>();
        r.put("code", 200);
        return r;
    }

	/**
	 * 小程序调用接口获取电话号码
	 * @param req
	 * @return
	 */
	@RequestMapping(value = "/getWxPhoneNumber", produces = "text/plain; charset=utf-8", method = { RequestMethod.GET,
			RequestMethod.POST })
	@ResponseBody
	public String getWxPhoneNumber(HttpServletRequest req) {
		// 1.请求微信接口服务，获取accessToken
		JSONObject accessTokenJson = WxLoginUtil.getAccessToken(Common.getProperty("app_id"), Common.getProperty("app_secret"));
		String accessToken = accessTokenJson.get("access_token",String.class);
		// 2.请求微信接口服务，获取用户手机号信息
		String code = req.getParameter("code");
		JSONObject phoneNumberJson = WxLoginUtil.getPhoneNumber(code, accessToken);
		String json = JSON.toJSONString(phoneNumberJson);
		return json;
	}

	/**
	 * 小程序授权登录的方法
	 * @param req
	 * @return
	 */
	@RequestMapping(value = "/wxlogin", produces = "text/plain; charset=utf-8", method = { RequestMethod.GET,
			RequestMethod.POST })
	@ResponseBody
	public String wxlogin(HttpServletRequest req) {
		String appid = Common.getProperty("app_id");
		String app_secret = Common.getProperty("app_secret");
		// 2.请求微信接口服务，获取用户手机号信息
		String code = req.getParameter("code");
		String baseUrl = "https://api.weixin.qq.com/sns/jscode2session?appid="+appid+"&secret="+app_secret+"&js_code="+code+"&grant_type=authorization_code";
		String body = HttpUtil.createGet(baseUrl).execute().body();
		return body;
	}

	/**
	 * 发送短信
	 * @param req
	 * @return
	 */
	@RequestMapping(value = "/sendSms", produces = "text/plain; charset=utf-8", method = { RequestMethod.GET,
			RequestMethod.POST })
	@ResponseBody
	public String sendSms(HttpServletRequest req) {
		String content = req.getParameter("content");
		String phone = req.getParameter("phone");
		String baseUrl = "https://api.smsbao.com/sms?u=ideabobo&p=1FE1982DB0C2045456F501829977926D&m="+phone+"&c="+UriEncoder.encode(content);
		String body = HttpUtil.createGet(baseUrl).execute().body();
		return body;
	}

}