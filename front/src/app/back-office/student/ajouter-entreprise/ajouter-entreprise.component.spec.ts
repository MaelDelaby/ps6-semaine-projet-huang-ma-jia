import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterEntrepriseStudentPageComponent } from './ajouter-entreprise.component';
import {describe, expect} from '@angular/core/testing/src/testing_internal';

describe('AjouterEntrepriseStudentPageComponent', () => {
  let component: AjouterEntrepriseStudentPageComponent;
  let fixture: ComponentFixture<AjouterEntrepriseStudentPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterEntrepriseStudentPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterEntrepriseStudentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
