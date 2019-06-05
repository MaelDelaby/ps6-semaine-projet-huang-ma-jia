import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Internship } from 'src/models/internship';
import { Company } from 'src/models/company';
import { InternshipService } from 'src/services/internship/internship.service';
import { CompanyService } from 'src/services/company/company.service';
import { getUser } from 'src/app/cookies'

@Component({
  selector: 'app-ajouter-student-stage-page',
  templateUrl: './ajouter-stage.component.html',
  styleUrls: ['../../styleForms.scss']})
export class AjouterStageStudentPageComponent implements OnInit {

  public addInternshipPageForm: FormGroup;

  public companyArray: Company[];

  public formError: boolean;
  public formSaved: boolean;

  constructor(public formBuilder: FormBuilder,
    public internshipService: InternshipService,
    public companyService: CompanyService) {
    this.companyService.companies$.subscribe((companies) => {
      this.companyArray = companies;
    });
    this.companyService.getCompany();

    this.addInternshipPageForm = this.formBuilder.group({
      studentId: [''],
      companyId: [''],
      name: [''],
      startDate: [''],
      endDate: [''],
      period: [''],
      salary: [''],
      contractRenewed: [''],
      tuteur: [''],
      hasCompanyCar: [''],
      rating: [''],
      comment: [''],
    });

    this.emptyInternshipPageForm();
    this.formSaved = false;
    this.formError = false;
  }

  ngOnInit() {
  }

  addInternship(){
    if (this.addInternshipPageForm.getRawValue().name == "" ||
      this.addInternshipPageForm.getRawValue().startDate == "" ||
      this.addInternshipPageForm.getRawValue().endDate == "" ||
      this.addInternshipPageForm.getRawValue().period == "" ||
      this.addInternshipPageForm.getRawValue().contractRenewed == "" ||
      this.addInternshipPageForm.getRawValue().hasCompanyCar == "" ||
      this.addInternshipPageForm.getRawValue().rating == "" ||
      this.addInternshipPageForm.getRawValue().comment == "" ||
      this.addInternshipPageForm.getRawValue().companyId == ""){
        this.formError = true;
        this.formSaved = false;
        return;
    }
    this.internshipService.addInternship(this.addInternshipPageForm.getRawValue() as Internship);
    this.formSaved = true;
    this.formError = false;
    this.emptyInternshipPageForm();
  }

  emptyInternshipPageForm(){
    this.addInternshipPageForm.setValue({
      studentId: getUser().id,
      companyId: '',
      name: '',
      startDate: '',
      endDate: '',
      period: '',
      salary: '',
      contractRenewed: '',
      tuteur: '',
      hasCompanyCar: '',
      rating: '1',
      comment: ''
    });
  }
}
