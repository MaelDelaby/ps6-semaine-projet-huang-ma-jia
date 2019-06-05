package com.example.android;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.ListView;

import com.example.android.adapters.AppointmentAdapter;
import com.example.android.models.Appointment;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.concurrent.TimeUnit;

import okhttp3.Call;
import okhttp3.Callback;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;

public class RDVActivity extends AppCompatActivity {

    private ListView rdvList;
    private Button swaper;
    private JSONArray jsonArray;
    private List<String> nameList;
    private List<JSONObject> jsonList;

    public void getHttpResponse(String url) {
        OkHttpClient client = new OkHttpClient();
        Request request = new Request.Builder()
                .url(url)
                .header("Accept", "application/json")
                .header("Content-Type", "application/json")
                .build();

        //Response response = client.newCall(request).execute();
        //Log.e("success", response.body().string());

        client.newCall(request).enqueue(new Callback() {
            @Override
            public void onFailure(Call call, IOException e) {
                String mMessage = e.getMessage().toString();
                Log.w("failure Response", mMessage);
                //call.cancel();
            }

            @Override
            public void onResponse(Call call, Response response) throws IOException {
                String mMessage = response.body().string();
                try {
                    jsonList = new ArrayList<>();
                    jsonArray = new JSONArray(mMessage);
                    for (int i=0; i < jsonArray.length(); i++){
                        JSONObject oneObject = jsonArray.getJSONObject(i);
                        jsonList.add(oneObject);
                    }
                } catch (JSONException e) {
                    e.printStackTrace();
                }
            }
        });
    }

    public Appointment jsonObjectToAppointment(JSONObject jsonObject) throws JSONException {
        int askerId = jsonObject.getInt("askerId");
        int receiverId = jsonObject.getInt("receiverId");
        String reason = jsonObject.getString("reason");
        String room = jsonObject.getString("room");
        Date date = new Date(jsonObject.getString("beginningDate"));
        int duration = jsonObject.getInt("duration");

        return new Appointment(askerId, receiverId, reason, room, date, duration);
    }

    public List<Appointment> jsonListToAppointmentList(List<JSONObject> jsonList) throws JSONException, ParseException {
        List<Appointment> appointments = new ArrayList<>();
        for(int i = 0;i < jsonList.size(); i++){
            JSONObject json = jsonList.get(i);
            int askerId = json.getInt("askerId");
            int receiverId = json.getInt("receiverId");
            String room = json.getString("room");
            String reason = json.getString("reason");
            SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm");
            Date date = formatter.parse(json.getString("beginningDate"));
            int time = json.getInt("duration");
            appointments.add(new Appointment(askerId, receiverId, reason, room, date, time));
        }
        return appointments;
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_rdv);

        swaper = findViewById(R.id.button);

        swaper.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent otherActivity = new Intent(getApplicationContext(), SlotActivity.class);
                startActivity(otherActivity);
                finish();
            }
        });

        getHttpResponse("http://"+R.string.local_ip+"/api/appointment/receiverId?receiverId=1");

        while(true){
            try {
                TimeUnit.SECONDS.sleep(1);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            if(jsonList != null){
                rdvList = findViewById(R.id.list);
                try {
                    rdvList.setAdapter(new AppointmentAdapter(this, jsonListToAppointmentList(jsonList)));
                } catch (JSONException e) {
                    e.printStackTrace();
                } catch (ParseException e) {
                    e.printStackTrace();
                }
                break;
            }
            else{
                getHttpResponse("http://"+R.string.local_ip+":9428/api/appointment/receiverId?receiverId=1");
            }
        }
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        rdvList.setAdapter(null);
    }
}
