import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CountryComponent, CountryListComponent, CountryPageComponent } from './countries';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {StudentService} from '../services/student/student.service';
import {CountryService} from '../services/country/country.service';
import {OneCountryService} from '../services/country/one-country.service';
import {SearchCompanyPageComponent} from './search-companies/search-company-page';
import {SearchCompanyComponent} from './search-companies/search-company';
import {SearchCompanyFormComponent} from './search-companies/search-company-form';
import {SearchCompanyListComponent} from './search-companies/search-company-list';
import {AppRoutingModule} from './app.AppRoutingModule';
import {InternshipComponent} from './company/internship';
import {InternshipListComponent} from './company/internship-list';
import {CompanyPageComponent} from './company/company-page';

@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    CountryListComponent,
    CountryPageComponent,
    SearchCompanyComponent,
    SearchCompanyFormComponent,
    SearchCompanyListComponent,
    SearchCompanyPageComponent,
    InternshipComponent,
    InternshipListComponent,
    CompanyPageComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule// , // Import all dependencies
    // AppRoutingModule
  ],
  providers: [StudentService, CountryService, OneCountryService], // All the services need to be provided
  bootstrap: [AppComponent]
})
export class AppModule {
}
