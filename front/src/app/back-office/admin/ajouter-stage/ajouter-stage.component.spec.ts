import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterStageAdminPageComponent } from './ajouter-stage.component';
import {describe, expect} from '@angular/core/testing/src/testing_internal';

describe('AjouterStageAdminPageComponent', () => {
  let component: AjouterStageAdminPageComponent;
  let fixture: ComponentFixture<AjouterStageAdminPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterStageAdminPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterStageAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
