package com.example.myapplication.activity;

import android.graphics.Color;
import android.os.Bundle;
import android.support.design.widget.FloatingActionButton;
import android.support.design.widget.Snackbar;
import android.support.design.widget.TabLayout;
import android.support.v4.view.ViewPager;
import android.support.v7.app.AppCompatActivity;
import android.view.View;

import com.example.myapplication.R;
import com.example.myapplication.adapter.SectionsPagerAdapter;
import com.example.myapplication.fragment.SessionsFragment;
import com.example.myapplication.fragment.TestFragment;

public class MainActivity extends AppCompatActivity {
    private SectionsPagerAdapter sectionsPagerAdapter;
    private ViewPager viewPager;
    public final static int myId = 1;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        sectionsPagerAdapter = new SectionsPagerAdapter(this, getSupportFragmentManager());

        viewPager = findViewById(R.id.view_pager);
        setupViewPager();

        TabLayout tabs = findViewById(R.id.tabs);
        tabs.setupWithViewPager(viewPager);
        tabs.setTabTextColors(Color.parseColor("#72b200"),Color.parseColor("#82cc00"));
    }

    private void setupViewPager(){
        sectionsPagerAdapter.addFragment(new SessionsFragment(), "Sessions");
        sectionsPagerAdapter.addFragment(new TestFragment(), "RDV");
        viewPager.setAdapter(sectionsPagerAdapter);
    }
}