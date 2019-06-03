import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CountryTicketListComponent } from './country-ticket-list.component';
import {describe, expect} from '@angular/core/testing/src/testing_internal';

describe('CountryTicketListComponent', () => {
  let component: CountryTicketListComponent;
  let fixture: ComponentFixture<CountryTicketListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryTicketListComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryTicketListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
