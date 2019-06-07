import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {AppRoutingModule} from './app.AppRoutingModule';

import {ActivitySectorService} from '../services/activitySector/activitySector.service';
import {CountryService} from '../services/country/country.service';
import {OneCountryService} from '../services/country/one-country.service';
import {CompanySizeService} from '../services/companySize/companySize.service';
import {CompanyService} from '../services/company/company.service';
import {OneCompanyService} from '../services/company/one-company.service';
import {InternshipService} from '../services/internship/internship.service';
import {PartnerHousingService} from '../services/partnerHousing/partnerHousing.service';
import {SectorService} from '../services/sector/sector.service';
import {SpecialtyService} from '../services/specialty/specialty.service';
import {OneUserService} from '../services/user/one-user.service';
import {ContinentService} from '../services/continent/continent.service';
import {UserService} from '../services/user/user.service';
import {RequestService} from '../services/request/request.service';
import {AppointmentService} from '../services/appointment/apointment.service';

import {CompanyTicketComponent,
  CompanyPageComponent,
  StudentTicketComponent,
  CountryPageComponent,
  InternshipTicketComponent,
  CompanySearchPageComponent,
  HomePageComponent,
  CardInformationComponent,
  CountryTicketComponent,
  CountryTicketListComponent,
  InteractiveMapComponent,
  ContactPageComponent,
  NavigationBarComponent,
  BottomArrowComponent,
  ConnectionPageComponent} from './front-office';

import {FatFooterComponent} from './fat-footer';

import {AdminHomePageComponent,
  AdminNavigationBarComponent,
  StudentHomePageComponent,
  StudentNavigationBarComponent,
  AjouterEntrepriseAdminPageComponent,
  AjouterStageAdminPageComponent,
  AjouterEntrepriseStudentPageComponent,
  AjouterPaysPageComponent,
  AjouterStageStudentPageComponent,
  GestionAvailabilityTimeSlotComponent,
  CalendrierAvailabilityTimeSlotComponent,
  ListAvailabilityTimeSlotComponent,
  CardAvailabilityTimeSlotComponent,
  RequestModifierPageComponent,
  InternshipFormComponent,
  CompanyFormComponent} from './back-office';

@NgModule({
  declarations: [
    AppComponent,
    CountryPageComponent,
    CompanyTicketComponent,
    InternshipTicketComponent,
    CompanyPageComponent,
    InteractiveMapComponent,
    HomePageComponent,
    CardInformationComponent,
    CountryTicketComponent,
    CountryTicketListComponent,
    CompanySearchPageComponent,
    NavigationBarComponent,
    FatFooterComponent,
    StudentTicketComponent,
    AdminHomePageComponent,
    AdminNavigationBarComponent,
    AjouterEntrepriseAdminPageComponent,
    AjouterStageAdminPageComponent,
    AjouterEntrepriseStudentPageComponent,
    AjouterPaysPageComponent,
    AjouterStageStudentPageComponent,
    ContactPageComponent,
    BottomArrowComponent,
    ConnectionPageComponent,
    StudentHomePageComponent,
    StudentNavigationBarComponent,
    GestionAvailabilityTimeSlotComponent,
    CalendrierAvailabilityTimeSlotComponent,
    ListAvailabilityTimeSlotComponent,
    CardAvailabilityTimeSlotComponent,
    RequestModifierPageComponent,
    InternshipFormComponent,
    CompanyFormComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule// , // Import all dependencies
    // AppRoutingModule
  ],
  providers: [
    ActivitySectorService,
    CountryService,
    OneCountryService,
    CompanySizeService,
    CompanyService,
    OneCompanyService,
    InternshipService,
    PartnerHousingService,
    SectorService,
    SpecialtyService,
    OneUserService,
    ContinentService,
    UserService,
    RequestService,
    AppointmentService
  ], // All the services need to be provided
  bootstrap: [AppComponent]
})
export class AppModule {
}
