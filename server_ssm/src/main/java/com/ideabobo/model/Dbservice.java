package com.ideabobo.model;

import java.lang.reflect.Field;
import java.util.List;
import java.util.Map;
import com.ideabobo.service.DatabaseService;
import com.ideabobo.util.Common;
import com.ideabobo.util.GetNowTime;
import com.ideabobo.util.Page;

/**
 * 数据库工具实例类,工具原理是利用反射获取对象属性,生成增删改查的sql语句
 */
public class Dbservice {
    // 数据库服务实例
	private DatabaseService databaseService;
    // 构造函数，初始化数据库服务实例
	public Dbservice(DatabaseService databaseService){
		this.databaseService = databaseService;
	}
    // 获取带有表前缀的表名
	public static String getTableName(String table){
		String pre = Common.getProperty("tableprefix"); // 获取表前缀
		return pre+table; // 返回带有前缀的表名
	}

    // 添加记录
	public String add(Object o,String tableName) throws Exception {
		Class c = o.getClass(); // 获取对象类
		Field[] fs = c.getDeclaredFields(); // 获取对象所有字段
		StringBuffer sql = new StringBuffer(); // SQL语句缓冲区
		sql.append("insert into " + tableName); // 拼接插入表名
		StringBuffer sql_name = new StringBuffer(); // 字段名缓冲区
		StringBuffer sql_value = new StringBuffer(); // 字段值缓冲区
		for (Field f : fs) { // 遍历所有字段
			f.setAccessible(true); // 设置字段可访问
			String fieldName = f.getName(); // 获取字段名
			if ("id".equals(fieldName)) { // 如果是id字段，跳过
			}else if("serialVersionUID".equals(fieldName)){ // 如果是serialVersionUID字段，跳过
			} else {
				if ("String".equals(f.getType().getSimpleName())) { // 如果字段类型是String
					sql_name.append(fieldName.toLowerCase() + ","); // 拼接字段名，转换为小写
					String fd="";
					if(f.get(o)!=null){
						fd = (String) f.get(o); // 获取字段值
					}
					sql_value.append("'" + fd + "'" + ","); // 拼接字段值，添加单引号
				} else {
					sql_name.append(f.getName().toLowerCase() + ","); // 拼接字段名，转换为小写
					sql_value.append(f.get(o) + ","); // 拼接字段值
				}
			}
		}
		String names = sql_name.toString().substring(0, sql_name.length() - 1); // 去掉最后一个逗号
		String values = sql_value.toString().substring(0,sql_value.length() - 1); // 去掉最后一个逗号
		sql.append("(").append(names).append(")").append(" ").append("values(").append(values).append(");"); // 拼接完整的SQL语句
		System.out.println(sql.toString()); // 打印SQL语句
		return sql.toString(); // 返回SQL语句
	}

	// 定义一个方法用于保存对象到数据库表中
	public String save(Object o, String tableName) throws Exception {
		// 获取对象的Class类型
		Class<? extends Object> c = o.getClass();
		// 获取对象的所有字段
		Field[] fs = c.getDeclaredFields();
		// 创建一个StringBuffer用于拼接SQL语句
		StringBuffer sql = new StringBuffer();
		// 拼接SQL语句的表名部分
		sql.append("insert into ").append(tableName);
		// 创建两个StringBuffer分别用于拼接字段名和字段值
		StringBuffer sql_name = new StringBuffer();
		StringBuffer sql_value = new StringBuffer();
		// 定义一个标志变量，用于判断对象是否已经存在
		boolean flag = false;
		// 遍历对象的所有字段
		for (Field f : fs) {
			// 设置字段可访问，以便获取私有字段的值
			f.setAccessible(true);
			// 获取字段的名称
			String fieldName = f.getName();
			// 如果字段名为"id"且字段的值不为null，则设置标志变量为true
			if ("id".equals(fieldName) && f.get(o) != null) {
				flag = true;
			// 如果字段名为"ndate"且字段的值为null或空字符串，则设置字段的值为当前时间
			}else if ("ndate".equals(fieldName) && (f.get(o) == null || "".equals(f.get(o)))) {
				f.set(o,GetNowTime.getNowTimeEn());
			}
		}
		// 如果标志变量为true，则调用update方法更新对象
		if (flag) {
			return update(o, tableName);
		// 否则调用add方法添加对象
		} else {
			return add(o, tableName);
		}
	}

	// 定义一个方法，用于更新数据库中的记录
	// 参数o：要更新的对象
	// 参数tableName：要更新的表名
	// 返回值：生成的更新SQL语句
	public String update(Object o,String tableName) throws Exception {
		// 获取对象的Class对象
		Class c = o.getClass();
		// 获取对象的所有字段
		Field[] fs = c.getDeclaredFields();
		// 创建一个StringBuffer对象，用于拼接SQL语句
		StringBuffer sql = new StringBuffer();
		// 拼接SQL语句的更新部分
		sql.append("update " + tableName + " set ");
		// 定义一个字符串变量，用于存储id字段的值
		String id = "";
		// 遍历对象的所有字段
		for(int i=0;i<fs.length;i++){
			// 获取当前字段
			Field f = fs[i];
			// 设置字段可访问，以便获取私有字段的值
			f.setAccessible(true);
			// 获取当前字段的名称
			String fieldName = f.getName();
			// 如果当前字段是id字段
			if ("id".equals(fieldName)) {
				// 获取id字段的值，并转换为字符串
				id = f.get(o).toString();
			// 如果当前字段是serialVersionUID字段，则跳过
			}else if("serialVersionUID".equals(fieldName)){
				continue;
			// 处理其他字段
			}  else {
				// 如果当前字段是String类型
				if ("String".equals(f.getType().getSimpleName())) {
					// 如果当前字段的值不为null
					if(f.get(o)!=null){
						// 拼接SQL语句，将字段名称转换为小写，并将字段值加上单引号
						sql.append(fieldName.toLowerCase()+"="+"\'" + f.get(o) + "\'" + ",");
					};
				} else {
					if(f.get(o)!=null){
						sql.append(fieldName.toLowerCase()+"=" + f.get(o)+",");
					}
				}
			}
		}
		String sql2 = sql.toString().substring(0,sql.length() - 1)+" where id="+id;
		System.out.println("update sql:"+sql2);
		return sql2;
	}

	// 定义一个方法，用于生成删除数据的SQL语句
	public String delete(String tableName, Object paras) throws Exception{
		// 使用String.format方法生成基本的删除SQL语句，其中%s将被tableName替换
		String sql = String.format("delete from %s where 1=1 ", tableName);
		// 检查传入的参数paras是否为null
		if(paras!=null){
			// 将paras赋值给局部变量o
			Object o = paras;
			// 获取o的类对象
			Class c = o.getClass();
			// 获取o类中的所有字段
			Field[] fields = c.getDeclaredFields();
			// 遍历所有字段
			for(int i=0;i<fields.length;i++){
				// 获取当前字段
				Field field = fields[i];
				// 设置字段可访问，即使它是私有的
				field.setAccessible(true);
				// 获取字段的名称
				String vname = field.getName();
				// 如果字段名称是"serialVersionUID"，则跳过该字段
				if("serialVersionUID".equals(vname)){
					continue;
				}
				// 获取字段o的值
				Object value = field.get(o);
				// 检查字段值是否为null
				if(value != null){
					// 如果字段值是String类型
					if(value instanceof String){
						// 将字段值转换为String
						String fv = value.toString();
						// 将字段名称和值添加到SQL语句中
						sql+=" and "+vname+" = '"+fv+"'";
					// 如果字段值是Integer类型
					}else if(value instanceof Integer){
						// 将字段值转换为int
						int fv = (Integer)value;
						// 将字段名称和值添加到SQL语句中
						sql+=" and "+vname+"="+fv;

					}
				}
			}
		}

		// 返回生成的SQL语句
		return sql;
	}


	/**
	 * 根据分页信息、表名、排序字段和排序方式获取分页数据
	 * @param page 分页对象，包含分页信息和查询模型
	 * @param tableName 数据库表名
	 * @param sort 排序字段
	 * @param order 排序方式（升序或降序）
	 * @param pageNo 当前页码
	 * @param pageSize 每页显示的记录数
	 * @return 分页对象，包含查询结果和分页信息
	 * @throws Exception 数据库操作异常
	 */
	public Page getByPage(Page page,String tableName,String sort ,String order,String pageNo,String pageSize) throws Exception {
		// 用于构建查询SQL语句的StringBuffer
		StringBuffer sb = new StringBuffer();
		// 用于构建查询总记录数的SQL语句的StringBuffer
		StringBuffer countsql = new StringBuffer();
		// 构建查询总记录数的SQL语句
		countsql.append("select count(*) from "+tableName+" where 1=1");
		// 构建查询数据的SQL语句
		sb.append("select * from "+tableName+" where 1=1");
		// 如果分页对象中包含查询模型
		if(page.model!=null){
			// 获取查询模型对象
			Object o = page.model;
			// 获取查询模型对象的类类型
			Class c = o.getClass();
			// 获取查询模型对象的所有字段
			Field[] fields = c.getDeclaredFields();
			// 遍历所有字段
			for(int i=0;i<fields.length;i++){
				// 获取当前字段
				Field field = fields[i];
				// 设置字段可访问，以便获取私有字段的值
				field.setAccessible(true);
				// 获取字段名
				String vname = field.getName();
				// 如果字段名是serialVersionUID，则跳过
				if("serialVersionUID".equals(vname)){
					continue;
				}
				// 获取字段的值
				Object value = field.get(page.model);
				// 如果字段值不为空
				if(value != null){
					// 如果字段值是字符串类型
					if(value instanceof String){
						// 获取字符串值
						String fv = value.toString();
						// 构建模糊查询的SQL片段
						String subSql = " and "+vname+" like '%"+fv+"%'";
						// 注释掉的代码：如果字符串值包含%，则去掉%
						/*if(fv.contains("%")){
							fv = fv.replace("%", "");
							subSql = " and "+vname+" like '%"+fv+"%'";
						}*/
						// 将模糊查询的SQL片段添加到查询SQL语句中
						sb.append(subSql);
						// 将模糊查询的SQL片段添加到查询总记录数的SQL语句中
						countsql.append(subSql);
					// 如果字段值是整数类型
					}else if(value instanceof Integer){
						// 获取整数值
						int fv = (Integer)value;
						// 构建精确查询的SQL片段并添加到查询SQL语句中
						sb.append(" and "+vname+"="+fv);
						// 构建精确查询的SQL片段并添加到查询总记录数的SQL语句中
						countsql.append(" and "+vname+"="+fv);

					}
				}
			}
		}
		// 执行查询总记录数的SQL语句，获取总记录数
		long totalRow = databaseService.findCount(countsql.toString());
		// 设置分页对象的总记录数
		page.total = totalRow;
		// 设置分页对象的记录数
		page.count = totalRow;

		// 如果排序字段不为空
		if (sort!=null){
			// 构建排序的SQL片段并添加到查询SQL语句中
			sb.append(" order by "+sort+" "+order);
		}
		// 如果页码不为空
		if (pageNo!=null){
			// 设置分页对象的每页显示的记录数
			page.pageSize = Integer.parseInt(pageSize);
			// 设置分页对象的当前页码
			page.pageNo = Integer.parseInt(pageNo);
		}
		// 构建分页查询的SQL片段并添加到查询SQL语句中
		sb.append(" limit "+((page.pageNo-1)*(page.pageSize))+","+page.pageSize);
		// 执行查询SQL语句，获取查询结果
		List<Map<String, Object>> al = databaseService.find(sb.toString());
		// 设置分页对象的查询结果
		page.rows = al;
		// 设置分页对象的数据
		page.data = al;
		// 返回分页对象
		return page;
	}


	/**
	 * 根据分页参数和SQL查询语句获取分页数据
	 *
	 * @param page 分页对象，包含分页信息和查询结果
	 * @param sql 查询语句
	 * @param sort 排序字段
	 * @param order 排序方式（升序或降序）
	 * @param pageNo 当前页码
	 * @param pageSize 每页显示的记录数
	 * @return 分页对象，包含查询结果和分页信息
	 * @throws Exception 数据库操作异常
	 */
	public Page getByPageSql(Page page,String sql,String sort,String order,String pageNo,String pageSize) throws Exception {

		// 创建StringBuffer对象用于拼接SQL语句
		StringBuffer sb = new StringBuffer(sql);
		// 从原始SQL语句中提取from后面的部分
		String suffsql = sql.split("from")[1];
		// 创建用于查询总记录数的SQL语句
		StringBuffer countsql = new StringBuffer("select count(*) from "+suffsql);

		// 调用数据库服务获取总记录数
		long totalRow = databaseService.findCount(countsql.toString());
		// 设置分页对象的总记录数和记录数
		page.total = totalRow;
		page.count = totalRow;

		// 如果排序字段不为空，则添加排序条件到SQL语句
		if (sort!=null){
			sb.append(" order by "+sort+" "+order);
		}
		// 如果页码不为空，则设置分页对象的页码和每页显示的记录数
		if (pageNo!=null){
			page.pageSize = Integer.parseInt(pageSize);
			page.pageNo = Integer.parseInt(pageNo);
		}
		// 添加分页条件到SQL语句
		sb.append(" limit "+((page.pageNo-1)*(page.pageSize))+","+page.pageSize);
		// 调用数据库服务执行查询，获取当前页的数据
		List<Map<String, Object>> al = databaseService.find(sb.toString());
		// 设置分页对象的行数据和数据
		page.rows = al;
		page.data = al;
		// 返回分页对象
		return page;
	}
	
	/**
	 * 根据分页信息和表名，查询符合条件的记录
	 * @param page 分页信息
	 * @param tableName 表名
	 * @return 分页结果
	 * @throws Exception 异常
	 */
	public Page getByPageLike(Page page,String tableName) throws Exception {
		// 创建StringBuffer对象用于拼接SQL语句
		StringBuffer sb = new StringBuffer();
		// 创建StringBuffer对象用于拼接统计记录数的SQL语句
		StringBuffer countsql = new StringBuffer();
		// 拼接统计记录数的SQL语句
		countsql.append("select count(*) from "+tableName+" where 1=1");
		// 拼接查询记录的SQL语句
		sb.append("select * from "+tableName+" where 1=1");
		// 如果分页信息中的model不为空
		if(page.model!=null){
			// 获取model对象
			Object o = page.model;
			// 获取model对象的类
			Class c = o.getClass();
			// 获取model对象的所有字段
			Field[] fields = c.getDeclaredFields();
			// 遍历所有字段
			for(int i=0;i<fields.length;i++){
				// 获取当前字段
				Field field = fields[i];
				// 设置字段可访问，以便获取私有字段的值
				field.setAccessible(true);
				// 获取字段名
				String vname = field.getName();
				// 如果字段名是serialVersionUID，则跳过
				if("serialVersionUID".equals(vname)){
					continue;
				}
				// 获取字段的值
				Object value = field.get(page.model);
				// 如果字段的值不为空
				if(value != null){
					// 如果字段的值是String类型
					if(value instanceof String){
						// 获取字段的字符串值
						String fv = value.toString();
						// 拼接like查询的子SQL语句
						String subSql = " and "+vname+" like '%"+fv+"%'";
						/*if(fv.contains("%")){
							fv = fv.replace("%", "");
							subSql = " and "+vname+" = '%"+fv+"%'";
						}*/
						sb.append(subSql);
						countsql.append(subSql);
					}else if(value instanceof Integer){
						int fv = (Integer)value;
						sb.append(" and "+vname+" like %"+fv+"%");
						countsql.append(" and "+vname+" like %"+fv+"%");

					}
				}
			}
		}
		// 执行统计记录数的SQL语句，获取总记录数
		long totalRow = databaseService.findCount(countsql.toString());
		// 设置分页信息中的总记录数
		page.total = totalRow;

		// 拼接分页查询的SQL语句
		sb.append(" limit "+((page.pageNo-1)*(page.pageSize))+","+page.pageSize);
		// 执行查询记录的SQL语句，获取当前页的记录列表
		List<Map<String, Object>> al = databaseService.find(sb.toString());
		// 设置分页信息中的当前页记录列表
		page.rows = al;
		// 返回分页信息对象
		return page;
	}

	// 定义一个方法，用于生成查询SQL语句
	public String list(String tableName,Object paras,String ordersql) throws Exception {
		// 创建一个StringBuffer对象，用于拼接SQL语句
		StringBuffer sb = new StringBuffer();
		// 拼接基础查询语句，从指定的表中选择所有列
		sb.append("select * from "+tableName+" where 1=1");
		// 检查传入的参数对象是否为空
		if(paras!=null){
			// 获取参数对象的Class对象
			Object o = paras;
			Class c = o.getClass();
			// 获取参数对象的所有字段
			Field[] fields = c.getDeclaredFields();
			// 遍历所有字段
			for(int i=0;i<fields.length;i++){
				Field field = fields[i];
				// 设置字段可访问，以便获取私有字段的值
				field.setAccessible(true);
				// 获取字段的名称
				String vname = field.getName();
				// 如果字段名称是"serialVersionUID"，则跳过该字段
				if("serialVersionUID".equals(vname)){
					continue;
				}
				// 获取字段的值
				Object value = field.get(o);
				// 如果字段值不为空
				if(value != null){
					// 如果字段值是字符串类型
					if(value instanceof String){
						// 将value转换为String类型
						String fv = value.toString();
						/*String subSql = " and "+vname+" = '"+fv+"'";
						if(fv.contains("%")){
							fv = fv.replace("%", "");*/
						String subSql = " and "+vname+" like '%"+fv+"%'";
						//}
						sb.append(subSql);
					}else if(value instanceof Integer){
						int fv = (Integer)value;
						sb.append(" and "+vname+"="+fv);

					}
				}
			}
		}

		if (ordersql!=null){
			sb.append(ordersql);
		}else{
			sb.append(" order by id desc");
		}

		return sb.toString();
	}

	// 定义一个方法，用于生成查询SQL语句
	public String list(String tableName,Object paras,boolean unLike) throws Exception {
		// 创建一个StringBuffer对象，用于拼接SQL语句
		StringBuffer sb = new StringBuffer();
		// 拼接基础SQL语句，从指定的表中选择所有列
		sb.append("select * from "+tableName+" where 1=1");
		// 检查传入的参数对象是否为空
		if(paras!=null){
			// 获取参数对象的Class类型
			Object o = paras;
			Class c = o.getClass();
			// 获取参数对象的所有字段
			Field[] fields = c.getDeclaredFields();
			// 遍历所有字段
			for(int i=0;i<fields.length;i++){
				Field field = fields[i];
				// 设置字段可访问，以便获取私有字段的值
				field.setAccessible(true);
				// 获取字段的名称
				String vname = field.getName();
				// 如果字段名称是"serialVersionUID"，则跳过该字段
				if("serialVersionUID".equals(vname)){
					continue;
				}
				// 获取字段的值
				Object value = field.get(o);
				// 如果字段值不为空
				if(value != null){
					// 如果字段值是字符串类型
					if(value instanceof String){
						String fv = value.toString();
						// 根据unLike参数决定使用like查询还是等值查询
						String subSql = " and "+vname+" like '%"+fv+"%'";
						if (unLike){
							subSql = " and "+vname+" = '"+fv+"'";
						}
						// 将子SQL语句拼接到总SQL语句中
						sb.append(subSql);
					// 如果字段值是整数类型
					}else if(value instanceof Integer){
						int fv = (Integer)value;
						// 将等值查询子SQL语句拼接到总SQL语句中
						sb.append(" and "+vname+"="+fv);

					}
				}
			}
		}

		// 在SQL语句末尾添加排序条件，按id字段降序排序
		sb.append(" order by id desc");
		// 返回生成的SQL语句
		return sb.toString();
	}

}
