package com.example.android.adapters;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.TextView;

import com.example.android.R;
import com.example.android.models.Administrator;

import java.util.Date;
import java.util.List;

public class AdministratorAdapter extends BaseAdapter {

    private Context context;
    private List<Administrator> administratorList;
    private LayoutInflater inflater;

    public AdministratorAdapter(Context context, List<Administrator> administratorList){
        this.administratorList = administratorList;
        this.context = context;
        this.inflater = LayoutInflater.from(context);
    }

    @Override
    public int getCount() {
        return administratorList.size();
    }

    @Override
    public Administrator getItem(int position) {
        return administratorList.get(position);
    }

    @Override
    public long getItemId(int position) {
        return 0;
    }

    @Override
    public View getView(int position, View convertView, ViewGroup parent) {
        convertView = inflater.inflate(R.layout.frag_sessions, null);

        Administrator administrator = administratorList.get(position);
        String name = administrator.getName();
        Date date = administrator.getFreeTo();

        TextView administratorNameView = convertView.findViewById(R.id.enseignant);
        TextView administratorDateView = convertView.findViewById(R.id.temps_restant);
        administratorNameView.setText(name);
        administratorDateView.setText("est libre jusqu'au "+date.getDay() +"/"+ date.getMonth() +"/"+ date.getYear() +"\nà "+ date.getHours() +" heure et "+ date.getMinutes()+" minutes");

        convertView.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

            }
        });

        return convertView;
    }
}
