package com.ideabobo.util;

import net.sourceforge.tess4j.ITesseract;
import net.sourceforge.tess4j.Tesseract;
import net.sourceforge.tess4j.TesseractException;

import java.io.File;

public class TesseractExample {
    public static void main(String[] args) {
        // 需要识别的图片
        File imageFile = new File("D:\\testocr\\rrr.png");
        // 创建一个实例
        ITesseract instance = new Tesseract();  // JNA Interface Mapping
        instance.setLanguage("chi_sim");
        // ITesseract instance = new Tesseract1(); // JNA Direct Mapping
        // 需要提供语言包的路径 需要注意，下章节说明
        instance.setDatapath("D:\\DevTool\\tessdata"); // path to tessdata directory

        try {
            String result = instance.doOCR(imageFile);
            System.out.println(result);
        } catch (TesseractException e) {
            System.err.println(e.getMessage());
        }
    }
}
