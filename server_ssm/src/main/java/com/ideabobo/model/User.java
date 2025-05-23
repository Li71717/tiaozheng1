package com.ideabobo.model;

import java.io.Serializable;

public class User implements Serializable {
    private Integer id;

    private String username;

    private String passwd;

    private String roletype;

    private String email;

    private String tel;

    private String sex;

    private String img;

    private String statecn;

    private String favs;

    private Integer money;

    private String openid;

    private String fname;

    private String idcard;

    private String zgzs;

    private String note;

    private String jn;

    private String jk;

    private String jsdz;

    private static final long serialVersionUID = 1L;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username == null ? null : username.trim();
    }

    public String getPasswd() {
        return passwd;
    }

    public void setPasswd(String passwd) {
        this.passwd = passwd == null ? null : passwd.trim();
    }

    public String getRoletype() {
        return roletype;
    }

    public void setRoletype(String roletype) {
        this.roletype = roletype == null ? null : roletype.trim();
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email == null ? null : email.trim();
    }

    public String getTel() {
        return tel;
    }

    public void setTel(String tel) {
        this.tel = tel == null ? null : tel.trim();
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex == null ? null : sex.trim();
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img == null ? null : img.trim();
    }

    public String getStatecn() {
        return statecn;
    }

    public void setStatecn(String statecn) {
        this.statecn = statecn == null ? null : statecn.trim();
    }

    public String getFavs() {
        return favs;
    }

    public void setFavs(String favs) {
        this.favs = favs == null ? null : favs.trim();
    }

    public Integer getMoney() {
        return money;
    }

    public void setMoney(Integer money) {
        this.money = money;
    }

    public String getOpenid() {
        return openid;
    }

    public void setOpenid(String openid) {
        this.openid = openid == null ? null : openid.trim();
    }

    public String getFname() {
        return fname;
    }

    public void setFname(String fname) {
        this.fname = fname == null ? null : fname.trim();
    }

    public String getIdcard() {
        return idcard;
    }

    public void setIdcard(String idcard) {
        this.idcard = idcard == null ? null : idcard.trim();
    }

    public String getZgzs() {
        return zgzs;
    }

    public void setZgzs(String zgzs) {
        this.zgzs = zgzs == null ? null : zgzs.trim();
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note == null ? null : note.trim();
    }

    public String getJn() {
        return jn;
    }

    public void setJn(String jn) {
        this.jn = jn == null ? null : jn.trim();
    }

    public String getJk() {
        return jk;
    }

    public void setJk(String jk) {
        this.jk = jk == null ? null : jk.trim();
    }

    public String getJsdz() {
        return jsdz;
    }

    public void setJsdz(String jsdz) {
        this.jsdz = jsdz == null ? null : jsdz.trim();
    }
}