import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHomePageComponent } from './home-page.component';
import {describe, expect} from '@angular/core/testing/src/testing_internal';

describe('AdminHomePageComponent', () => {
  let component: UserHomePageComponent;
  let fixture: ComponentFixture<UserHomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserHomePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
