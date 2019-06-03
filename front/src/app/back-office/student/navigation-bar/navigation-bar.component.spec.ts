import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNavigationBarComponent } from './navigation-bar.component';
import {describe, expect} from '@angular/core/testing/src/testing_internal';

describe('AdminNavigationBarComponent', () => {
  let component: UserNavigationBarComponent;
  let fixture: ComponentFixture<UserNavigationBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserNavigationBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserNavigationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
