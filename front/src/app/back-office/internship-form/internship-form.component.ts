import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Internship } from 'src/models/internship';
import { Company } from 'src/models/company';
import { InternshipService } from 'src/services/internship/internship.service';
import { CompanyService } from 'src/services/company/company.service';
import { User } from 'src/models/user';
import { getUser } from 'src/app/cookies';

@Component({
  selector: 'app-internship-form',
  templateUrl: './internship-form.component.html',
  styleUrls: ['../styleForms.scss']})
export class InternshipFormComponent implements OnInit {

  @Input()
  internship: Internship;
  @Input()
  add: Boolean;

  public internshipForm: FormGroup;

  public companyArray: Company[];

  public formError: boolean;
  public formSaved: boolean;

  public user: User;

  constructor(public formBuilder: FormBuilder,
    public internshipService: InternshipService,
    public companyService: CompanyService) {
    this.companyService.companies$.subscribe((companies) => {
      this.companyArray = companies;
    });
    this.user = getUser();

    this.companyService.getCompany();

    this.internshipForm = this.formBuilder.group({
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
      //rating: [''],
      comment: [''],
    });

    this.formSaved = false;
    this.formError = false;
  }

  ngOnInit() {
    this.fillForm();
  }

  addInternship(){
    if (this.internshipForm.getRawValue().name == "" ||
      this.internshipForm.getRawValue().startDate == "" ||
      this.internshipForm.getRawValue().endDate == "" ||
      this.internshipForm.getRawValue().period == "" ||
      this.internshipForm.getRawValue().contractRenewed == "" ||
      this.internshipForm.getRawValue().hasCompanyCar == "" ||
      //this.internshipForm.getRawValue().rating == "" ||
      this.internshipForm.getRawValue().comment == "" ||
      this.internshipForm.getRawValue().companyId == ""){
        this.formError = true;
        this.formSaved = false;
        return;
    }

    this.internshipService.addInternship(this.internshipForm.getRawValue() as Internship, !this.user.isAdmin);

    this.formSaved = true;
    this.formError = false;
  }

  modifyInternship(){
    if (this.internshipForm.getRawValue().name == "" ||
      this.internshipForm.getRawValue().startDate == "" ||
      this.internshipForm.getRawValue().endDate == "" ||
      this.internshipForm.getRawValue().period == "" ||
      this.internshipForm.getRawValue().contractRenewed == "" ||
      this.internshipForm.getRawValue().hasCompanyCar == "" ||
      //this.internshipForm.getRawValue().rating == "" ||
      this.internshipForm.getRawValue().comment == "" ||
      this.internshipForm.getRawValue().companyId == ""){
        this.formError = true;
        this.formSaved = false;
        return;
    }

    this.internshipService.deleteInternship(this.internship.id);
    this.internshipService.addInternship(Object.assign({}, this.internshipForm.getRawValue() as Internship, {id : this.internship.id}), !this.user.isAdmin);

    this.formSaved = true;
    this.formError = false;
  }

  fillForm(){
    if (this.internship){
      this.internshipForm.setValue({
        studentId: this.internship.studentId,
        companyId: this.internship.companyId,
        name: this.internship.name,
        startDate: this.internship.startDate,
        endDate: this.internship.endDate,
        period: this.internship.period,
        salary: this.internship.salary,
        contractRenewed: this.internship.contractRenewed,
        tuteur: this.internship.tuteur,
        hasCompanyCar: this.internship.hasCompanyCar,
        //rating: this.internship.rating,
        comment: this.internship.comment
      });
    } else {
      this.internshipForm.setValue({
        studentId: '',
        companyId: '',
        name: '',
        startDate: '',
        endDate: '',
        period: '',
        salary: '',
        contractRenewed: '',
        tuteur: '',
        hasCompanyCar: '',
        //rating: 0,
        comment: ''
      });
      if (!this.user.isAdmin){
        this.internshipForm.patchValue({
          studentId: this.user.id
        });
      }
    }
  }
}
