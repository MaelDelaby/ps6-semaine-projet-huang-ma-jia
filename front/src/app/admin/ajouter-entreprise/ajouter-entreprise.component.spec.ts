import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterEntreprisePageComponent } from './ajouter-entreprise.component';
import {describe, expect} from '@angular/core/testing/src/testing_internal';

describe('AjouterEntreprisePageComponent', () => {
  let component: AjouterEntreprisePageComponent;
  let fixture: ComponentFixture<AjouterEntreprisePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterEntreprisePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterEntreprisePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
