import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterStageStudentPageComponent } from './ajouter-stage.component';
import {describe, expect} from '@angular/core/testing/src/testing_internal';

describe('AjouterStageStudentPageComponent', () => {
  let component: AjouterStageStudentPageComponent;
  let fixture: ComponentFixture<AjouterStageStudentPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterStageStudentPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterStageStudentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
