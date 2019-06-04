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

import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.util.EntityUtils;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import static android.provider.ContactsContract.CommonDataKinds.Website.URL;

public class SlotActivity extends AppCompatActivity {

    private ListView sessionsDisponibles;
    private Button swaper;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

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
