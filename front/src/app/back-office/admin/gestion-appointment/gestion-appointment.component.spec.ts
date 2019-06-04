import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionAppointmentComponent } from './gestion-appointment.component';
import {describe, expect} from '@angular/core/testing/src/testing_internal';

describe('GestionAppointmentComponent', () => {
  let component: GestionAppointmentComponent;
  let fixture: ComponentFixture<GestionAppointmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionAppointmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
