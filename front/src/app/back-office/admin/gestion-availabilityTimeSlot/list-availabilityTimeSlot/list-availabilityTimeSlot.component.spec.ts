import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {ListAvailabilityTimeSlotComponent} from './list-availabilityTimeSlot.component';
import {describe, expect} from '@angular/core/testing/src/testing_internal';

describe('ListAvailabilityTimeSlotComponent', () => {
  let component: ListAvailabilityTimeSlotComponent;
  let fixture: ComponentFixture<ListAvailabilityTimeSlotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAvailabilityTimeSlotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAvailabilityTimeSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
