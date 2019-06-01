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
import {OneStudentService} from '../services/student/one-student.service';
import {ContinentService} from '../services/continent/continent.service';
import {StudentService} from '../services/student/student.service';

import {CompanyTicketComponent, CompanyPageComponent} from './company';
import {StudentTicketComponent} from './students';
import {CountryPageComponent} from './countries';
import {InternshipTicketComponent} from './internships';
import {CompanySearchPageComponent} from './company-search';
import {HomePageComponent, CardInformationComponent, CountryTicketComponent, CountryTicketListComponent} from './homePage';
import {InteractiveMapComponent} from './homePage';
import {ContactPageComponent} from './contactPage';
import {NavigationBarComponent, FatFooterComponent} from './top-bottom-bar';
import {AdminHomePageComponent, AdminNavigationBarComponent, AjouterEntreprisePageComponent, AjouterPaysPageComponent} from './admin';
import {AjouterStagePageComponent} from './admin';

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
    AjouterEntreprisePageComponent,
    AjouterPaysPageComponent,
    AjouterStagePageComponent,
    ContactPageComponent,
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
    OneStudentService,
    ContinentService,
    StudentService
  ], // All the services need to be provided
  bootstrap: [AppComponent]
})
export class AppModule {
}
