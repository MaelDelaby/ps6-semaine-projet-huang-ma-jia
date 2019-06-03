import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNavigationBarComponent } from './navigation-bar.component';
import {describe, expect} from '@angular/core/testing/src/testing_internal';

describe('AdminNavigationBarComponent', () => {
  let component: AdminNavigationBarComponent;
  let fixture: ComponentFixture<AdminNavigationBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminNavigationBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNavigationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
