package com.ideabobo.serviceImp;
 
import java.beans.BeanInfo;
import java.beans.IntrospectionException;
import java.beans.Introspector;
import java.beans.PropertyDescriptor;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
 
import org.springframework.beans.factory.annotation.Autowired;

import com.ideabobo.pojo.Params;
import com.ideabobo.service.DatabaseService;

 
/**
 * 类名称: DatabaseServiceImp
 * 该类实现了数据库服务接口，提供了对数据库的增删改查等操作。
 */
public class DatabaseServiceImp<T> {
 
	@Autowired
	private DatabaseService databaseService; // 自动注入数据库服务接口的实现类
 
	/**
	 * 增删改SQL操作
	 * 
	 * @param sql 操作的sql语句
	 * @return 影响的行数
	 */
	public long executeAction(String sql) {
		return databaseService.executeAction(sql); // 调用数据库服务接口的executeAction方法执行SQL语句
	}
 
	/**
	 * 查询单条语句
	 * 
	 * @param sql 操作的sql语句
	 * @return 查询结果的第一条记录
	 */
	public Map<String, Object> findFirst(String sql) {
		return databaseService.findFirst(sql); // 调用数据库服务接口的findFirst方法查询单条记录
	}
 
	/**
	 * 查询多条语句
	 * 
	 * @param sql 操作的sql语句
	 * @return 查询结果的多条记录
	 */
	public List<Map<String, Object>> find(String sql) {
		return databaseService.find(sql); // 调用数据库服务接口的find方法查询多条记录
	}
 
	/**
	 * 查找数量
	 * 
	 * @author zhy
	 * @param sql 查询的sql 语句
	 * @return 查询结果的数量
	 */
	public long findCount(String sql) {
		return databaseService.findCount(sql); // 调用数据库服务接口的findCount方法查询记录数量
	}
	
	/**
	 * 查询单个
	 * 
	 * @author zhy
	 * @param sql 查询的sql 语句
	 * @return 查询结果的单个值
	 */
	public Object findOneValue(String sql) {
		return databaseService.findOneValue(sql); // 调用数据库服务接口的findOneValue方法查询单个值
	}
	
	/**
	 * 拼接SQL实现预处理语句
	 * 
	 * @author zhy
	 * @param sql 预处理的语句
	 * @param param 拼接的参数
	 * @return 拼接后的SQL语句
	 */
	protected String sqlAppend(String sql, Map<String, Object> searchParams) {
		for (String key : searchParams.keySet()) {
			sql = sql.replaceAll(':' + key, '\'' + searchParams.get(key).toString().replaceAll("'", "") + '\'');
		}
		return sql; // 返回拼接后的SQL语句
	}
	
	/**
	 * 验证字符串防止sql注入
	 * 
	 * @author zhy
	 * @param value 要过滤的值
	 * @return 过滤后的值
	 */
	protected String validateValue(String value) {
		return '\'' + value.replaceAll("'", "") + '\''; // 返回过滤后的值
	}
	
	/**
	 * 去掉所有单引号
	 * 
	 * @author zhy
	 * @param value 传入的字符串
	 * @return 去掉单引号后的字符串
	 */
	protected String deleteSpoit(String value) {
		return value.replaceAll("'", ""); // 返回去掉单引号后的字符串
	}
	
	/**
	 * 直接拼接参数
	 * 
	 * @author zhy
	 * @param searchParams 查询参数
	 * @return 拼接后的SQL条件语句
	 */
	protected StringBuffer appendWhereSql(Map<String, Object> searchParams) {
		StringBuffer sqlBuffer = new StringBuffer("");
		if(searchParams != null && searchParams.size() > 0) {
			sqlBuffer.append(" where ");
			for (String key : searchParams.keySet()) {
				sqlBuffer.append(key).append(" = ").append('\'').append(searchParams.get(key).toString().replaceAll("'", "")).append("' or ");
			}
			int length = sqlBuffer.length();
			return sqlBuffer.delete(length - 3, length); // 返回拼接后的SQL条件语句
		} else {
			return sqlBuffer; // 返回空字符串
		}
	}
	
	/**
	 * 得到实体名
	 * 
	 * @author 周化益
	 * @param entityName 实体Class
	 * @return 实体名
	 */
	private String getTableName(Class<? extends Object> entityName) {
		return entityName.getSimpleName().toUpperCase(); // 返回实体类名的全大写形式
	}
	
	/**
	 * 添加实体
	 * 
	 * @author 周化益
	 * @param entityName 实体Class
	 * @param addData 添加的数据
	 * @return 主键ID
	 */
	public long addClass(Class<T> entityName, Map<String, Object> addData) {
		Params params = new Params();
		params.setTables(getTableName(entityName));
		params.setInsertMap(addData);
		databaseService.addEntity(params); // 调用数据库服务接口的addEntity方法添加实体
		return params.getId(); // 返回主键ID
	}
	
	/**
	 * 批量添加数据
	 * 
	 * @author zhy
	 * @param entityName 实体Class
	 * @param listMap	批量数据集合
	 * @return 影响的行数
	 */
	public int batchAdd(Class<T> entityName, List<Map<String, Object>> listMap) {
		Params params = new Params();
		params.setTables(getTableName(entityName));
		params.setInsertMap(listMap.get(0));
		params.setBacthInsertMap(listMap);
		return databaseService.batchAdd(params); // 调用数据库服务接口的batchAdd方法批量添加数据
	}
	
	/**
	 * 通过条件修改实体
	 * 
	 * @author 周化益
	 * @param entityName 实体Class
	 * @param updataData 修改数据
	 * @param whereSql 条件语句
	 * @return 成功或失败
	 */
	public boolean updateByWhere(Class<T> entityName, Map<String , Object> updateData, String whereSql){
		boolean bool = false;
		try {
			StringBuffer sb = new StringBuffer("update ");
			sb.append(getTableName(entityName)).append(" set ");
			Iterator<String> it = updateData.keySet().iterator();
			StringBuffer updateBuffer = new StringBuffer();
			
			while (it.hasNext()) {
				String key = it.next();
				if(updateData.get(key) == null) {
					updateBuffer.append(key).append('=').append("null").append(',');
				} else{
					updateBuffer.append(key).append('=').append(':'+key).append(',');
				}
			}
			
			sb.append(updateBuffer.substring(0, updateBuffer.length() - 1)).append(whereSql);
			bool = databaseService.executeAction(sqlAppend(sb.toString(), updateData)) > 0; // 调用executeAction方法执行更新操作
		} catch (Exception e) {
			e.printStackTrace();
		}
		return bool; // 返回操作结果
	}
	
	/**
	 * 通过ID删除实体
	 *
	 * @param entityName 实体Class
	 * @param id 主键ID
	 * @return 影响的行数
	 */
	public long deleteById(Class<T> entityName, Object id) {
		String sql = "delete from " + getTableName(entityName) + " where id = " + id;
		return databaseService.executeAction(sql); // 调用executeAction方法执行删除操作
	}
	
	/**
	 * 获取实体字段列表
	 * 
	 * @author zhy
	 * @param clazz 实体Class
	 * @return 实体字段列表
	 */
	public static String getClassColumns(Class<?> clazz) {
		String columns = "";
		// 定义实体信息对象
		BeanInfo beanInfo;
		try {
			// 获取实体详细信息
			beanInfo = Introspector.getBeanInfo(clazz);
 
			// 获取实体属性描述集合
			PropertyDescriptor[] propertyDescriptors = beanInfo.getPropertyDescriptors();
			for (int i = 0; i < propertyDescriptors.length; i++) {
				// 获取属性描述
				PropertyDescriptor descriptor = propertyDescriptors[i];
 
				// 获取属性名
				String propertyName = descriptor.getName();
				if (!"class".equals(propertyName)) {
					columns += propertyName + ",";
				}
			}
		} catch (IntrospectionException | IllegalArgumentException e) {
			e.printStackTrace();
		}
		return columns.substring(0, columns.length() - 1); // 返回实体字段列表
	}
	
	/**
	 * 通过实体class获取实体列表数据（无条件）
	 * 
	 * @author zhy
	 * @param clazz 实体Class
	 * @return 实体列表数据
	 */
	public List<Map<String, Object>> getListByBean(Class<?> clazz) {
		StringBuffer sql = new StringBuffer();
		//查询部分
		sql.append("SELECT ").append(getClassColumns(clazz)).append(" FROM ").append(getTableName(clazz));
		
		return databaseService.find(sql.toString()); // 调用find方法查询实体列表数据
	}
	
	/**
	 * 通过实体class获取实体数据（无条件）
	 * 
	 * @author zhy
	 * @param clazz 实体Class
	 * @return 实体数据
	 */
	public Map<String, Object> getByBean(Class<?> clazz) {
		StringBuffer sql = new StringBuffer();
		//查询部分
		sql.append("SELECT ").append(getClassColumns(clazz)).append(" FROM ").append(getTableName(clazz));
		
		return databaseService.findFirst(sql.toString()); // 调用findFirst方法查询实体数据
	}
	
	/**
	 * 通过实体class获取实体数据
	 * 
	 * @author zhy
	 * @param clazz 实体Class
	 * @param whereSql 查询条件
	 * @return 实体数据
	 */
	public Map<String, Object> getBean(Class<?> clazz, String whereSql) {
		StringBuffer sql = new StringBuffer();
		//查询部分
		sql.append("SELECT ").append(getClassColumns(clazz)).append(" FROM ").append(getTableName(clazz));
		//条件
		sql.append(' ').append(whereSql);
		
		return databaseService.findFirst(sql.toString()); // 调用findFirst方法查询实体数据
	}
	
	/**
	 * 通过实体class获取实体列表数据
	 * 
	 * @author zhy
	 * @param clazz 实体Class
	 * @param whereSql 查询条件
	 * @return 实体列表数据
	 */
	public List<Map<String, Object>> getListByBean(Class<?> clazz, String whereSql) {
		StringBuffer sql = new StringBuffer();
		//查询部分
		sql.append("SELECT ").append(getClassColumns(clazz)).append(" FROM ").append(getTableName(clazz));
		//条件
		sql.append(' ').append(whereSql);
		
		return databaseService.find(sql.toString()); // 调用find方法查询实体列表数据
	}
	
	/**
	 * 通过实体class获取实体列表数据
	 * 
	 * @author zhy
	 * @param clazz 实体Class
	 * @param whereSql 查询条件
	 * @param page 开始页
	 * @param rows 查询的条数
	 * @return 实体列表数据
	 */
	public List<Map<String, Object>> getListByBean(Class<?> clazz, String whereSql, int page, int rows) {
		StringBuffer sql = new StringBuffer();
		//查询部分
		sql.append("SELECT ").append(getClassColumns(clazz)).append(" FROM ").append(getTableName(clazz));
		//条件
		sql.append(' ').append(whereSql);
		//分页
		sql.append(" limit ").append((page - 1) * rows).append(',').append(rows);
		
		return databaseService.find(sql.toString()); // 调用find方法查询实体列表数据
	}
	
	/**
	 * 通过实体class获取实体列表数据
	 * 
	 * @author zhy
	 * @param clazz 实体Class
	 * @param whereSql 查询条件
	 * @param page 开始页
	 * @param rows 查询的条数
	 * @param sortColumn 排序字段
	 * @param sort 排序方式
	 * @return 实体列表数据
	 */
	public List<Map<String, Object>> getListByBean(Class<?> clazz, String whereSql, int page, int rows, String sortColumn, String sort) {
		StringBuffer sql = new StringBuffer();
		//查询部分
		sql.append("SELECT ").append(getClassColumns(clazz)).append(" FROM ").append(getTableName(clazz));
		//条件
		sql.append(' ').append(whereSql);
		//排序
		sql.append(" ORDER BY ").append(sortColumn).append(' ').append(sort);
		//分页
		sql.append(" LIMIT ").append((page - 1) * rows).append(',').append(rows);
		
		return databaseService.find(sql.toString()); // 调用find方法查询实体列表数据
	}
	
	/**
	 * 通过实体class获取实体列表数据
	 * 
	 * @author zhy
	 * @param clazz 实体Class
	 * @param page 开始页
	 * @param rows 查询的条数
	 * @return 实体列表数据
	 */
	public List<Map<String, Object>> getListByBean(Class<?> clazz, int page, int rows) {
		StringBuffer sql = new StringBuffer();
		//查询部分
		sql.append("SELECT ").append(getClassColumns(clazz)).append(" FROM ").append(getTableName(clazz));
		//分页
		sql.append(" limit ").append((page - 1) * rows).append(',').append(rows);
		
		return databaseService.find(sql.toString()); // 调用find方法查询实体列表数据
	}
	
	/**
	 * 通过实体class获取实体列表数据
	 * 
	 * @author zhy
	 * @param clazz 实体Class
	 * @param whereSql 查询条件
	 * @param page 开始页
	 * @param rows 查询的条数
	 * @param sortColumn 排序字段
	 * @param sort 排序方式
	 * @return 实体列表数据
	 */
	public List<Map<String, Object>> getListByBean(Class<?> clazz, int page, int rows, String sortColumn, String sort) {
		StringBuffer sql = new StringBuffer();
		//查询部分
		sql.append("SELECT ").append(getClassColumns(clazz)).append(" FROM ").append(getTableName(clazz));
		//排序
		sql.append(" ORDER BY ").append(sortColumn).append(' ').append(sort);
		//分页
		sql.append(" LIMIT ").append((page - 1) * rows).append(',').append(rows);
		
		return databaseService.find(sql.toString()); // 调用find方法查询实体列表数据
	}
	
	/**
	 * 通过实体class获取实体列表数据
	 * 
	 * @author zhy
	 * @param sqlStr 自己写的SQL语句
	 * @param whereSql 查询条件
	 * @param page 开始页
	 * @param rows 查询的条数
	 * @return 实体列表数据
	 */
	public List<Map<String, Object>> getListByBean(String sqlStr, String whereSql, int page, int rows) {
		StringBuffer sql = new StringBuffer();
		//查询部分
		sql.append(sqlStr);
		//条件
		sql.append(' ').append(whereSql);
		//分页
		sql.append(" limit ").append((page - 1) * rows).append(',').append(rows);
		
		return databaseService.find(sql.toString()); // 调用find方法查询实体列表数据
	}
	
	/**
	 * 通过实体class获取实体列表数据
	 * 
	 * @author zhy
	 * @param sqlStr 自己写的SQL语句
	 * @param whereSql 查询条件
	 * @param page 开始页
	 * @param rows 查询的条数
	 * @param sortColumn 排序字段
	 * @param sort 排序方式
	 * @return 实体列表数据
	 */
	public List<Map<String, Object>> getListByBean(String sqlStr, String whereSql, int page, int rows, String sortColumn, String sort) {
		StringBuffer sql = new StringBuffer();
		//查询部分
		sql.append(sqlStr);
		//条件
		sql.append(' ').append(whereSql);
		//排序
		sql.append(" ORDER BY ").append(sortColumn).append(' ').append(sort);
		//分页
		sql.append(" LIMIT ").append((page - 1) * rows).append(',').append(rows);
		
		return databaseService.find(sql.toString()); // 调用find方法查询实体列表数据
	}
	
	/**
	 * 通过实体class获取实体列表数据
	 * 
	 * @author zhy
	 * @param sqlStr 自己写的SQL语句
	 * @param whereSql 查询条件
	 * @param page 开始页
	 * @param rows 查询的条数
	 * @return 实体列表数据
	 */
	public List<Map<String, Object>> getListByBean(String sqlStr, int page, int rows) {
		StringBuffer sql = new StringBuffer();
		//查询部分
		sql.append(sqlStr);
		//分页
		sql.append(" limit ").append((page - 1) * rows).append(',').append(rows);
		
		return databaseService.find(sql.toString()); // 调用find方法查询实体列表数据
	}
	
	/**
	 * 批量删除
	 * 
	 * @author zhy
	 * @param clazz 实体Class
	 * @param deleteList 删除的集合
	 * @param deleteColumnName 批量删除条件字段
	 * @return 影响的行数
	 */
	public int batchDelete(Class<?> clazz, List<?> deleteList, String deleteColumnName) {
		Params params = new Params();
		params.setDeleteCoulumnName(deleteColumnName);
		params.setDeleteList(deleteList);
		params.setTables(getTableName(clazz));
		
		return databaseService.batchDelete(params); // 调用batchDelete方法批量删除数据
	}
}
