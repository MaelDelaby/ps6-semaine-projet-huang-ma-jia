import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryTicketComponent } from './country-ticket.component';
import {describe, expect} from '@angular/core/testing/src/testing_internal';

describe('TicketComponent', () => {
  let component: CountryTicketComponent;
  let fixture: ComponentFixture<CountryTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
