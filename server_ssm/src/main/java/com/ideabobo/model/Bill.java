package com.ideabobo.model;

import java.io.Serializable;

import java.util.Date; // 新增导入

public class Bill implements Serializable {
    private Integer id;

    private String gids;

    private String user;

    private String uid;

    private String shop;

    private String ndate;

    private String total;

    private String gnames;

    private String sid;

    private String tel;

    private String address;

    private String note;

    private String statecn;

    private String pnote;

    private String pf;

    private String gcounts;

    private String ydate;

    private String tc;

    private static final long serialVersionUID = 1L;

    private Date  actual_service_start_time;
    private Date actual_service_end_time;
    private Date worker_free_time_after_this_bill;
    private Double service_duration_hours_applied;
    private Double travel_time_hours_applied;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getGids() {
        return gids;
    }

    public void setGids(String gids) {
        this.gids = gids == null ? null : gids.trim();
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user == null ? null : user.trim();
    }

    public String getUid() {
        return uid;
    }

    public void setUid(String uid) {
        this.uid = uid == null ? null : uid.trim();
    }

    public String getShop() {
        return shop;
    }

    public void setShop(String shop) {
        this.shop = shop == null ? null : shop.trim();
    }

    public String getNdate() {
        return ndate;
    }

    public void setNdate(String ndate) {
        this.ndate = ndate == null ? null : ndate.trim();
    }

    public String getTotal() {
        return total;
    }

    public void setTotal(String total) {
        this.total = total == null ? null : total.trim();
    }

    public String getGnames() {
        return gnames;
    }

    public void setGnames(String gnames) {
        this.gnames = gnames == null ? null : gnames.trim();
    }

    public String getSid() {
        return sid;
    }

    public void setSid(String sid) {
        this.sid = sid == null ? null : sid.trim();
    }

    public String getTel() {
        return tel;
    }

    public void setTel(String tel) {
        this.tel = tel == null ? null : tel.trim();
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address == null ? null : address.trim();
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note == null ? null : note.trim();
    }

    public String getStatecn() {
        return statecn;
    }

    public void setStatecn(String statecn) {
        this.statecn = statecn == null ? null : statecn.trim();
    }

    public String getPnote() {
        return pnote;
    }

    public void setPnote(String pnote) {
        this.pnote = pnote == null ? null : pnote.trim();
    }

    public String getPf() {
        return pf;
    }

    public void setPf(String pf) {
        this.pf = pf == null ? null : pf.trim();
    }

    public String getGcounts() {
        return gcounts;
    }

    public void setGcounts(String gcounts) {
        this.gcounts = gcounts == null ? null : gcounts.trim();
    }

    public String getYdate() {
        return ydate;
    }

    public void setYdate(String ydate) {
        this.ydate = ydate == null ? null : ydate.trim();
    }

    public String getTc() {
        return tc;
    }

    public void setTc(String tc) {
        this.tc = tc == null ? null : tc.trim();
    }

    public Date getActualServiceStartTime() {return actual_service_start_time;}

    public void setActualServiceStartTime(Date actualServiceStartTime) {this.actual_service_start_time = actual_service_start_time;}

    public Date getActualServiceEndTime() {
        return actual_service_end_time;
    }

    public void setActualServiceEndTime(Date actualServiceEndTime) {this.actual_service_end_time = actual_service_end_time;}

    public Date getWorkerFreeTimeAfterThisBill() {return worker_free_time_after_this_bill;}

    public void setWorkerFreeTimeAfterThisBill(Date workerFreeTimeAfterThisBill) {this.worker_free_time_after_this_bill= worker_free_time_after_this_bill;}

    public Double getServiceDurationHoursApplied() {return service_duration_hours_applied;}

    public void setServiceDurationHoursApplied(Double serviceDurationHoursApplied) {this.service_duration_hours_applied = service_duration_hours_applied;}

    public Double getTravelTimeHoursApplied() {return travel_time_hours_applied;}

    public void setTravelTimeHoursApplied(Double travelTimeHoursApplied) {this.travel_time_hours_applied = travel_time_hours_applied;}
}