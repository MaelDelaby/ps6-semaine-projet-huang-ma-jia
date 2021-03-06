import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentNavigationBarComponent } from './navigation-bar.component';
import {describe, expect} from '@angular/core/testing/src/testing_internal';

describe('AdminNavigationBarComponent', () => {
  let component: StudentNavigationBarComponent;
  let fixture: ComponentFixture<StudentNavigationBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentNavigationBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentNavigationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
