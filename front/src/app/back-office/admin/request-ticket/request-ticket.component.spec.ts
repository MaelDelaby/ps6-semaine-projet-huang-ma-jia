import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestTicketComponent } from './request-ticket.component';
import {describe, expect} from '@angular/core/testing/src/testing_internal';

describe('RequestTicketComponent', () => {
  let component: RequestTicketComponent;
  let fixture: ComponentFixture<RequestTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
