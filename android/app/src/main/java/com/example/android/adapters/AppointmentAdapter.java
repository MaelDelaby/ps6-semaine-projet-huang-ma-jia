package com.example.android.adapters;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.TextView;

import com.example.android.R;
import com.example.android.models.Appointment;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;



public class AppointmentAdapter extends BaseAdapter {

    private Context context;
    private List<Appointment> appointmentList;
    private LayoutInflater inflater;

    public AppointmentAdapter(Context context, List<Appointment> appointmentList){
        this.context = context;
        this.appointmentList = appointmentList;
        this.inflater = LayoutInflater.from(context);
    }

    @Override
    public int getCount() {
        return appointmentList.size();
    }

    @Override
    public Appointment getItem(int position) {
        return appointmentList.get(position);
    }

    @Override
    public long getItemId(int position) {
        return 0;
    }

    @Override
    public View getView(int position, View view, ViewGroup parent) {
        view = inflater.inflate(R.layout.frag_appointment, null);

        Appointment appointment = appointmentList.get(position);
        int name = appointment.getAskerId();
        Date date = appointment.getDate();
        int time = appointment.getTimeMins();
        String room = appointment.getRoom();

        TextView textview = view.findViewById(R.id.text);
        //String firstname = users.get(name).getFirstname();
        //String lastname = users.get(name).getLastname();
        SimpleDateFormat formatter = new SimpleDateFormat("d MMMM yyyy à HH:mm");
        textview.setText(name+" vous attend le\n"+formatter.format(date)+"\nen salle "+room+" pour un entretien de "+ time/60000 +" minutes");

        view.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

            }
        });

        return view;
    }
}
