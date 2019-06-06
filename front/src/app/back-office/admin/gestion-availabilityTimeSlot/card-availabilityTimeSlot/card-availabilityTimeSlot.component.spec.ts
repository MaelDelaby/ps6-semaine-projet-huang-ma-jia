import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAvailabilityTimeSlotComponent } from './card-availabilityTimeSlot.component';
import {describe, expect} from '@angular/core/testing/src/testing_internal';

describe('CardAvailabilityTimeSlotComponent', () => {
  let component: CardAvailabilityTimeSlotComponent;
  let fixture: ComponentFixture<CardAvailabilityTimeSlotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardAvailabilityTimeSlotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAvailabilityTimeSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
