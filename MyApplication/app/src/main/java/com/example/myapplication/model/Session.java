package com.example.myapplication.model;

import java.util.Date;

public class Session {
    private int id;
    private String firstname;
    private String lastname;
    private Date endingDate;
    private String room;

    public Session(int id, String firstname, String lastname, Date date, String room){
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.endingDate = date;
        this.room = room;
    }

    public int getId() {
        return id;
    }

    public String getFirstname() {
        return firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public Date getEndingDate() {
        return endingDate;
    }

    public String getRoom() {
        return room;
    }
}
