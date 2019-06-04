package com.example.android.models;

import java.util.Date;

public class Appointment {

    private int askerId;
    private int receiverId;
    private String resons;
    private String room;
    private Date date;
    private int timeMins;

    public Appointment(int askerId, int receiverId, String resons, String room, Date date, int timeMins){
        this.askerId = askerId;
        this.receiverId = receiverId;
        this.date = date;
        this.room = room;
        this.timeMins = timeMins;
        this.resons = resons;
    }

    public String getRoom() {
        return room;
    }

    public String getResons() {
        return resons;
    }

    public int getTimeMins() {
        return timeMins;
    }

    public Date getDate() {
        return date;
    }

    public int getReceiverId() {
        return receiverId;
    }

    public int getAskerId() { return askerId;
    }
}
