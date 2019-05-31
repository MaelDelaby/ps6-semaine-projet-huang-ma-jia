import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternshipTicketComponent } from './internship-ticket.component';
import {describe, expect} from '@angular/core/testing/src/testing_internal';

describe('InternshipComponent', () => {
  let component: InternshipTicketComponent;
  let fixture: ComponentFixture<InternshipTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternshipTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternshipTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
