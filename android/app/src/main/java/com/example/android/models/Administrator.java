package com.example.android.models;

import java.util.Date;

public class Administrator {

    private String name;
    private Date freeTo;

    public Administrator(String name, Date freeTo){
        this.name = name;
        this.freeTo = freeTo;
    }

    public Date getFreeTo() {
        return freeTo;
    }

    public String getName() {
        return name;
    }
}
