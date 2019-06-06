import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionAvailabilityTimeSlotComponent } from './gestion-availabilityTimeSlot.component';
import {describe, expect} from '@angular/core/testing/src/testing_internal';

describe('GestionAvailabilityTimeSlotComponent', () => {
  let component: GestionAvailabilityTimeSlotComponent;
  let fixture: ComponentFixture<GestionAvailabilityTimeSlotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionAvailabilityTimeSlotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionAvailabilityTimeSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

