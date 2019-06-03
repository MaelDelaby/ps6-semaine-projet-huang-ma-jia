import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterStagePageComponent } from './ajouter-stage.component';
import {describe, expect} from '@angular/core/testing/src/testing_internal';

describe('AjouterStagePageComponent', () => {
  let component: AjouterStagePageComponent;
  let fixture: ComponentFixture<AjouterStagePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterStagePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterStagePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
