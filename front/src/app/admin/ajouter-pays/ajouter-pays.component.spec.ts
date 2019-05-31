import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterPaysPageComponent } from './ajouter-pays.component';
import {describe, expect} from '@angular/core/testing/src/testing_internal';

describe('AjouterPaysPageComponent', () => {
  let component: AjouterPaysPageComponent;
  let fixture: ComponentFixture<AjouterPaysPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterPaysPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterPaysPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
