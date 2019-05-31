import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentTicketComponent } from './student-ticket.component';
import {describe, expect} from '@angular/core/testing/src/testing_internal';

describe('StudentTicketComponent', () => {
  let component: StudentTicketComponent;
  let fixture: ComponentFixture<StudentTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
