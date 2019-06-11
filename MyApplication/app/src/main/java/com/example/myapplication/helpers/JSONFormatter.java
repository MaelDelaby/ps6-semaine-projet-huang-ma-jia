package com.example.myapplication.helpers;

import com.example.myapplication.model.Session;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class JSONFormatter {

    public JSONFormatter(){
    }

    public List<JSONObject> jsonParser(String mMessage) {
        List<JSONObject> jsonObjectList = new ArrayList<>();
        JSONArray jsonArray = null;
        try {
            jsonArray = new JSONArray(mMessage);
        } catch (JSONException e) {
            e.printStackTrace();
        }
        for (int i = 0; i < jsonArray.length(); i++) {
            JSONObject oneObject = null;
            try {
                oneObject = jsonArray.getJSONObject(i);
            } catch (JSONException e) {
                e.printStackTrace();
            }
            jsonObjectList.add(oneObject);
        }
        return jsonObjectList;
    }

    public List<Session> jsonListToSession(List<JSONObject> jsonList) throws JSONException, ParseException {
        List<Session> sessions = new ArrayList<>();
        for(int i = 0;i < jsonList.size(); i++){
            JSONObject json = jsonList.get(i);
            int id = json.getInt("id");
            int receiverId = json.getInt("receiverId");
            String hour = json.getString("endingHour");
            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm");
            Date date = sdf.parse(json.getString("date")+" "+hour);
            sessions.add(new Session(receiverId, "", "", date,"O+308" ));
        }
        return sessions;
    }
}
