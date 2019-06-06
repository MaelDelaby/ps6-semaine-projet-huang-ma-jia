import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailibilityFormComponent } from './availibilityTimeSlot-form.component';
import {describe, expect} from '@angular/core/testing/src/testing_internal';

describe('AvailibilityFormComponent', () => {
  let component: AvailibilityFormComponent;
  let fixture: ComponentFixture<AvailibilityFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailibilityFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailibilityFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
