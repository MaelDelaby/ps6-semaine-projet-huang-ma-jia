import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestModifierPageComponent } from './request-modifier-page.component';
import {describe, expect} from '@angular/core/testing/src/testing_internal';

describe('RequestModifierPageComponent', () => {
  let component: RequestModifierPageComponent;
  let fixture: ComponentFixture<RequestModifierPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestModifierPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestModifierPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
