import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendrierAppointmentComponent } from './calendrier-appointment.component';
import {describe, expect} from '@angular/core/testing/src/testing_internal';

describe('AdminHomePageComponent', () => {
  let component: CalendrierAppointmentComponent;
  let fixture: ComponentFixture<CalendrierAppointmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendrierAppointmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendrierAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
