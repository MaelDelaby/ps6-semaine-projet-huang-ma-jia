package com.example.myapplication.adapter;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.ListAdapter;
import android.widget.TextView;

import com.example.myapplication.R;
import com.example.myapplication.helpers.MqttHelper;
import com.example.myapplication.model.Session;

import org.eclipse.paho.client.mqttv3.MqttException;

import java.io.UnsupportedEncodingException;
import java.text.SimpleDateFormat;
import java.util.List;

import static com.example.myapplication.fragment.SessionsFragment.mqttHelper;

public class SessionAdapter extends BaseAdapter {

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
    public View getView(int position, View convertView, ViewGroup parent) {
        convertView = inflater.inflate(R.layout.session, null);

        Session session= sessionsList.get(position);

        TextView text = convertView.findViewById(R.id.text);
        SimpleDateFormat sdf = new SimpleDateFormat("HH : mm");
        text.setText(session.getFirstname()+" "+session.getLastname()+" tien un créneau aujourd'hui jusqu'à "+sdf.format(session.getEndingDate())+" en "+session.getRoom());

        convertView.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                try {
                    mqttHelper.deleteLastAppointment();
                    mqttHelper.publishMessage("{\n" +
                            "\"id\":4," +
                            "\"askerId\":3," +
                            "\"receiverId\":10" +
                            "}", "addAppointment");
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
