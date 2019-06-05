package com.example.android;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.ListView;

import com.example.android.adapters.AdministratorAdapter;
import com.example.android.models.Administrator;
import com.example.android.models.Users;

import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.util.EntityUtils;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.concurrent.TimeUnit;

import okhttp3.Call;
import okhttp3.Callback;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;

public class SlotActivity extends AppCompatActivity {

    private ListView sessionsDisponibles;
    private Button swaper;
    /*private List<JSONObject> jsonObjectList;
    public static List<Users> users;

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
                    jsonObjectList = new ArrayList<>();
                    JSONArray jsonArray = new JSONArray(mMessage);
                    for (int i=0; i < jsonArray.length(); i++){
                        JSONObject oneObject = jsonArray.getJSONObject(i);
                        jsonObjectList.add(oneObject);
                    }
                } catch (JSONException e) {
                    e.printStackTrace();
                }
            }
        });
    }

    public void jsonListToUsers(List<JSONObject> jsonList) throws JSONException, ParseException {
        users = new ArrayList<>();
        for(int i = 0;i < jsonList.size(); i++){
            JSONObject json = jsonList.get(i);
            int id = json.getInt("id");
            String firstname = json.getString("firstName");
            String lastname = json.getString("lastName");
            users.add(new Users(id, firstname, lastname));
        }
    }*/


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        /*
        getHttpResponse("http://"+R.string.local_ip+":9428/api/users");
        while(true){
            try {
                TimeUnit.SECONDS.sleep(1);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            if(jsonObjectList != null){
                try {
                    jsonListToUsers(jsonObjectList);
                } catch (JSONException e) {
                    e.printStackTrace();
                } catch (ParseException e) {
                    e.printStackTrace();
                }
                break;
            }
            else{
                getHttpResponse("http://"+R.string.local_ip+":9428/api/users");
            }
        }*/

        List<Administrator> administratorList = new ArrayList<>();
        administratorList.add(new Administrator("Anne-Marie Déry-Pina", new Date(2019, 6, 9, 10, 30)));
        administratorList.add(new Administrator("Jean Polito", new Date(2019, 6, 9, 10, 20)));
        administratorList.add(new Administrator("Anouche Patouche", new Date(2019, 6, 9, 10, 30)));
        administratorList.add(new Administrator("Mael Delaby", new Date(2019, 6, 9, 10, 30)));
        administratorList.add(new Administrator("Philippe Collet", new Date(2019, 6, 9, 10, 30)));
        administratorList.add(new Administrator("Rémy Larroye", new Date(2019, 6, 9, 10, 30)));
        administratorList.add(new Administrator("Gabriel Revelli", new Date(2019, 6, 9, 10, 30)));

        sessionsDisponibles = findViewById(R.id.list);
        sessionsDisponibles.setAdapter(new AdministratorAdapter(this, administratorList));


        swaper = findViewById(R.id.button);

        swaper.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent otherActivity = new Intent(getApplicationContext(), RDVActivity.class);
                startActivity(otherActivity);
                finish();
            }
        });
    }
}
