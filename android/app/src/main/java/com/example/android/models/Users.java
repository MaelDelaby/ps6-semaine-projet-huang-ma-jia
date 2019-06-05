package com.example.android.models;

import java.util.List;

public class Users {
    private int id;
    private String firstname;
    private String lastname;

    public Users(int id, String firstname, String lastname){
        this.firstname = firstname;
        this.lastname = lastname;
        this.id = id;
    }

    public String getFirstname() {
        return firstname;
    }

    public String getLastname() {
        return lastname;
    }
}
