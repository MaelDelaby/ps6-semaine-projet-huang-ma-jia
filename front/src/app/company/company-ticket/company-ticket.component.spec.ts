import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyTicketComponent } from './company-ticket.component';
import {describe, expect} from '@angular/core/testing/src/testing_internal';

describe('CompanyTicketComponent', () => {
  let component: CompanyTicketComponent;
  let fixture: ComponentFixture<CompanyTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
