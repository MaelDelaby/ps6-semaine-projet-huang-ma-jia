package com.example.myapplication.fragment;

import android.os.Bundle;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ListView;
import android.widget.TextView;
import android.support.annotation.Nullable;
import android.support.annotation.NonNull;
import android.support.v4.app.Fragment;
import android.arch.lifecycle.Observer;
import android.arch.lifecycle.ViewModelProviders;

import com.example.myapplication.R;
import com.example.myapplication.adapter.SessionAdapter;
import com.example.myapplication.helpers.JSONFormatter;
import com.example.myapplication.helpers.MqttHelper;
import com.example.myapplication.model.PageViewModel;
import com.example.myapplication.model.Session;

import org.eclipse.paho.client.mqttv3.IMqttDeliveryToken;
import org.eclipse.paho.client.mqttv3.MqttCallbackExtended;
import org.eclipse.paho.client.mqttv3.MqttMessage;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * A placeholder fragment containing a simple view.
 */
public class SessionsFragment extends Fragment {

    public static MqttHelper mqttHelper;
    private ListView listView;


    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        View root = inflater.inflate(R.layout.fragment_sessions, container, false);
        listView = root.findViewById(R.id.session_list);

        startMqtt();
        return root;
    }

    private void startMqtt() {
        mqttHelper = new MqttHelper(getContext());
        mqttHelper.setCallback(new MqttCallbackExtended() {
            @Override
            public void connectComplete(boolean b, String s) {

            }

            @Override
            public void connectionLost(Throwable throwable) {

            }

            @Override
            public void messageArrived(String topic, MqttMessage mqttMessage) throws Exception {
                Log.w("Debug", mqttMessage.toString());
                String mMessage = mqttMessage.toString();
                JSONFormatter jsonFormatter = new JSONFormatter();
                List<Session> sessions = jsonFormatter.jsonListToSession(jsonFormatter.jsonParser(mMessage));
                listView.setAdapter(new SessionAdapter(getContext(), sessions ));
            }


            @Override
            public void deliveryComplete(IMqttDeliveryToken token) {

            }
        });

    }
}