import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FatFooterComponent } from './fat-footer.component';
import {describe, expect} from '@angular/core/testing/src/testing_internal';

describe('FatFooterComponent', () => {
  let component: FatFooterComponent;
  let fixture: ComponentFixture<FatFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FatFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FatFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
