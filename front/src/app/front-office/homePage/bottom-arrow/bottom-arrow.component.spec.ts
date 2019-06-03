import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BottomArrowComponent } from './bottom-arrow.component';
import {describe, expect} from '@angular/core/testing/src/testing_internal';

describe('BottomArrowComponent', () => {
  let component: BottomArrowComponent;
  let fixture: ComponentFixture<BottomArrowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomArrowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomArrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
