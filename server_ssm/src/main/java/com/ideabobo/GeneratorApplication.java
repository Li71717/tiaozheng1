package com.ideabobo;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpMethod;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import org.apache.ibatis.annotations.Mapper;

@MapperScan(value = "com.ideabobo.service", annotationClass = Mapper.class)
// 使用@MapperScan注解指定要扫描的Mapper接口所在的包路径，这里扫描的是com.ideabobo.service包下的Mapper接口
@SpringBootApplication
// 使用@SpringBootApplication注解标记这是一个Spring Boot应用的入口类，该注解包含了@Configuration、@EnableAutoConfiguration和@ComponentScan等注解
public class GeneratorApplication {

	public static void main(String[] args) {
        // Spring Boot应用的入口方法，通过SpringApplication.run方法启动应用
		// SpringApplication.run方法会引导Spring Boot应用启动过程
		// 第一个参数是应用的主类，通常是包含main方法的类
		// 第二个参数是命令行参数，可以传递给应用
		SpringApplication.run(GeneratorApplication.class, args);
	}
	private CorsConfiguration buildConfig() {
        // 创建一个CorsConfiguration对象，用于配置CORS（跨域资源共享）的规则
        CorsConfiguration corsConfiguration = new CorsConfiguration();
        corsConfiguration.addAllowedOrigin("*");
        // 允许所有来源的请求，即允许任何域名的请求
        corsConfiguration.addAllowedHeader("*");
        // 允许所有请求头
        corsConfiguration.addAllowedMethod("*");
        // 允许所有HTTP方法的请求，这里重复添加了DELETE方法，可以优化
        //corsConfiguration.addAllowedMethod(HttpMethod.DELETE);
        corsConfiguration.addAllowedMethod(HttpMethod.POST);
        corsConfiguration.addAllowedMethod(HttpMethod.GET);
        corsConfiguration.addAllowedMethod(HttpMethod.PUT);
        corsConfiguration.addAllowedMethod(HttpMethod.DELETE);
        corsConfiguration.addAllowedMethod(HttpMethod.OPTIONS);
        // 允许特定的HTTP方法，包括DELETE、POST、GET、PUT和OPTIONS
        // 以下配置被注释掉了，可以根据需要启用
        //corsConfiguration.setAllowCredentials(true);
        // 允许发送Cookie信息
        //corsConfiguration.setMaxAge(3600L);
        // 设置预检请求的有效期，单位为秒
        //corsConfiguration.addExposedHeader(HttpHeaderConStant.X_TOTAL_COUNT);
        // 暴露特定的响应头
        return corsConfiguration;
    }
	@Bean
    // 使用@Bean注解将corsFilter方法返回的对象注册为Spring容器中的一个Bean
    public CorsFilter corsFilter() {
        // 创建一个UrlBasedCorsConfigurationSource对象，用于基于URL的CORS配置
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", buildConfig()); // 4
        return new CorsFilter(source);
    }
}
