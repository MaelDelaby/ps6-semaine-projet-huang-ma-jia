package com.example.myapplication.fragment;

import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.TextView;

import com.example.myapplication.R;
import com.example.myapplication.helpers.MqttHelper;

import org.eclipse.paho.client.mqttv3.IMqttDeliveryToken;
import org.eclipse.paho.client.mqttv3.MqttCallbackExtended;
import org.eclipse.paho.client.mqttv3.MqttException;
import org.eclipse.paho.client.mqttv3.MqttMessage;

import java.io.UnsupportedEncodingException;
import java.util.Random;

import static com.example.myapplication.activity.MainActivity.myId;
import static com.example.myapplication.adapter.SessionAdapter.ses;
import static com.example.myapplication.fragment.SessionsFragment.mqttHelper;

public class TestFragment extends Fragment {
    static int receiverId;

    public static TextView textpos;
    public static TextView dataReceived;
    Button no;

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        super.onCreateView(inflater, container, savedInstanceState);
        View view = inflater.inflate(R.layout.fragment_test, container, false);

        textpos = view.findViewById(R.id.position);
        dataReceived = view.findViewById(R.id.dataReceived);
        no = view.findViewById(R.id.no);

        dataReceived.setText("Allez sur la page d'a coté pour demander un rendez-vous !");

        no.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                try {
                    mqttHelper.deleteLastAppointment();
                } catch (MqttException e) {
                    e.printStackTrace();
                } catch (UnsupportedEncodingException e) {
                    e.printStackTrace();
                }
                dataReceived.setText("Allez sur la page d'a coté pour demander un rendez-vous !");
            }
        });


        return view;
    }

}
