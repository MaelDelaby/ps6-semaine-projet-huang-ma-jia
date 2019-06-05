import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterEntrepriseAdminPageComponent } from './ajouter-entreprise.component';
import {describe, expect} from '@angular/core/testing/src/testing_internal';

describe('AjouterEntrepriseAdminPageComponent', () => {
  let component: AjouterEntrepriseAdminPageComponent;
  let fixture: ComponentFixture<AjouterEntrepriseAdminPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterEntrepriseAdminPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterEntrepriseAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
