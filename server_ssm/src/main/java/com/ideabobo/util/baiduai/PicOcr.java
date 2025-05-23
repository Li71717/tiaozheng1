package com.ideabobo.util.baiduai;

import com.ideabobo.util.baiduai.util.AuthTokenService;
import com.ideabobo.util.baiduai.util.Base64Util;
import com.ideabobo.util.baiduai.util.FileUtil;
import com.ideabobo.util.baiduai.util.HttpUtil;

import java.net.URLEncoder;



/**
 * 通用物体和场景识别
 */
public class PicOcr {
    public static String advancedGeneral() {
        // 请求url
        String url = "https://aip.baidubce.com/rest/2.0/image-classify/v2/advanced_general";
        try {
            // 本地文件路径
            String filePath = "D:\\testocr\\ttt.jpg";
            byte[] imgData = FileUtil.readFileByBytes(filePath);
            String imgStr = Base64Util.encode(imgData);
            String imgParam = URLEncoder.encode(imgStr, "UTF-8");

            String param = "image=" + imgParam;

            // 注意这里仅为了简化编码每一次请求都去获取access_token，线上环境access_token有过期时间， 客户端可自行缓存，过期后重新获取。
            String accessToken = AuthTokenService.getAuth();

            String result = HttpUtil.post(url, accessToken, param);
            System.out.println(result);
            //{"result_num":5,"result":[{"keyword":"杯子","score":0.886584,"root":"服务-容器"},{"keyword":"玻璃杯","score":0.698528,"root":"服务-容器"},{"keyword":"啤酒杯","score":0.513997,"root":"服务-食物"},{"keyword":"红酒杯","score":0.318251,"root":"服务-容器"},{"keyword":"饮水杯","score":0.030615,"root":"服务-容器"}],"log_id":1590895215987910335}
            return result;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    public static void main(String[] args) {
        PicOcr.advancedGeneral();
    }
}
