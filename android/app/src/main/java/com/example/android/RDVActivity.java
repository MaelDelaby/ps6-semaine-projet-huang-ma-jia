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

import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.util.EntityUtils;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import okhttp3.Call;
import okhttp3.Callback;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;

public class RDVActivity extends AppCompatActivity {

    private ListView rdvList;
    private Button swaper;
    private JSONObject jsonObject;
    private List<Appointment> appointmentList;

    public void getHttpResponse(String url) throws IOException {

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
                    Log.e("here", mMessage);
                    jsonObject = new JSONObject(mMessage);
                } catch (JSONException e) {
                    e.printStackTrace();
                }
                Log.e("jsonArray", mMessage);
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

        appointmentList = new ArrayList<>();
        appointmentList.add(new Appointment(0,1,"faute de temps", "0+307", new Date(),1200000));
        appointmentList.add(new Appointment(0,1,"faute de temps", "0+307", new Date(),1200000));
        appointmentList.add(new Appointment(0,1,"faute de temps", "0+307", new Date(),1200000));
        appointmentList.add(new Appointment(0,1,"faute de temps", "0+307", new Date(),1200000));
        rdvList = findViewById(R.id.list);
        rdvList.setAdapter(new AppointmentAdapter(this, appointmentList));

        /*try {
            getHttpResponse("http://10.212.101.203:9428/api/appointment/askerId?askerId=1");
            appointmentList = new ArrayList<>();
            for(int i = 0; i < jsonObject.length(); i++){
                appointmentList.add(jsonObjectToAppointment(jsonObject.ge));
            }
            rdvList = findViewById(R.id.list);
            rdvList.setAdapter(new AppointmentAdapter(this, appointmentList));
        }catch(JSONException e){
            appointmentList.add(new Appointment(0,1,"faute de temps", "0+307", new Date(),1200000));
            appointmentList.add(new Appointment(0,1,"faute de temps", "0+307", new Date(),1200000));
            appointmentList.add(new Appointment(0,1,"faute de temps", "0+307", new Date(),1200000));
            appointmentList.add(new Appointment(0,1,"faute de temps", "0+307", new Date(),1200000));
            rdvList = findViewById(R.id.list);
            rdvList.setAdapter(new AppointmentAdapter(this, appointmentList));
        } catch (IOException e){
            appointmentList.add(new Appointment(0,1,"faute de temps", "0+307", new Date(),1200000));
            appointmentList.add(new Appointment(0,1,"faute de temps", "0+307", new Date(),1200000));
            appointmentList.add(new Appointment(0,1,"faute de temps", "0+307", new Date(),1200000));
            appointmentList.add(new Appointment(0,1,"faute de temps", "0+307", new Date(),1200000));
            rdvList = findViewById(R.id.list);
            rdvList.setAdapter(new AppointmentAdapter(this, appointmentList));
        }*/
    }
}
