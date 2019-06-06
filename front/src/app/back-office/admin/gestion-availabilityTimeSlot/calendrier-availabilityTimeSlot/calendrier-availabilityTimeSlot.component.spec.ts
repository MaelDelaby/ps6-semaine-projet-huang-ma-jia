import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendrierAvailabilityTimeSlotComponent } from './calendrier-availabilityTimeSlot.component';
import {describe, expect} from '@angular/core/testing/src/testing_internal';

describe('CalendrierAvailabilityTimeSlotComponent', () => {
  let component: CalendrierAvailabilityTimeSlotComponent;
  let fixture: ComponentFixture<CalendrierAvailabilityTimeSlotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendrierAvailabilityTimeSlotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendrierAvailabilityTimeSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
