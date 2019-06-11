package com.example.myapplication.adapter;

import android.content.Context;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.ListAdapter;
import android.widget.TextView;

import com.example.myapplication.R;
import com.example.myapplication.helpers.JSONFormatter;
import com.example.myapplication.helpers.MqttHelper;
import com.example.myapplication.model.Session;

import org.eclipse.paho.client.mqttv3.IMqttDeliveryToken;
import org.eclipse.paho.client.mqttv3.MqttCallbackExtended;
import org.eclipse.paho.client.mqttv3.MqttException;
import org.eclipse.paho.client.mqttv3.MqttMessage;

import java.io.UnsupportedEncodingException;
import java.text.SimpleDateFormat;
import java.util.List;
import java.util.Random;

import static com.example.myapplication.activity.MainActivity.myId;
import static com.example.myapplication.fragment.SessionsFragment.mqttHelper;
import static com.example.myapplication.fragment.TestFragment.dataReceived;
import static com.example.myapplication.fragment.TestFragment.textpos;

public class SessionAdapter extends BaseAdapter {
    public static Session ses;
    private Context context;
    private List<Session> sessionsList;
    private LayoutInflater inflater;

    public SessionAdapter(Context context, List<Session> sessions){
        this.context = context;
        this.sessionsList = sessions;
        this.inflater = LayoutInflater.from(context);
    }


    @Override
    public int getCount() {
        return sessionsList.size();
    }

    @Override
    public Session getItem(int position) {
        return sessionsList.get(position);
    }

    @Override
    public long getItemId(int position) {
        return 0;
    }

    @Override
    public View getView(final int position, View convertView, ViewGroup parent) {
        convertView = inflater.inflate(R.layout.session, null);

        final Session session= sessionsList.get(position);

        TextView text = convertView.findViewById(R.id.text);
        SimpleDateFormat sdf = new SimpleDateFormat("HH : mm");
        text.setText("Prendre rendez-vous avec un menbre du BRI aujourd'hui jusqu'à "+sdf.format(session.getEndingDate())+" en "+session.getRoom());

        convertView.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                try {
                    mqttHelper.publishMessage("{" +
                            "\"askerId\":"+ myId +"," +
                            "\"receiverId\":"+ session.getId() +
                            "}", "addAppointment");
                    dataReceived.setText("Vous avez rendez-vous dans la salle "+session.getRoom()+"\n\n\n Nombre d'étudiant avant vous :");
                    mqttHelper.subscribeToTopic("ResponcePostionReceiverIdAndAskerId");
                    mqttHelper.publishMessage("{\"askerId\": "+myId+", \"receiverId\": "+session.getId()+"}","GetPostionReceiverIdAndAskerId");
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
                            String use = mqttMessage.toString();
                            textpos.setText(use);
                        }


                        @Override
                        public void deliveryComplete(IMqttDeliveryToken token) {

                        }
                    });
                } catch (MqttException e) {
                    e.printStackTrace();
                } catch (UnsupportedEncodingException e) {
                    e.printStackTrace();
                }
            }
        });

        return convertView;
    }
}
