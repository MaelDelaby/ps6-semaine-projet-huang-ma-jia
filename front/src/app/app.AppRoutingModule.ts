import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent,
  CountryPageComponent,
  CompanyPageComponent,
  CompanySearchPageComponent,
  ContactPageComponent,
  ConnectionPageComponent} from './front-office';
import {AdminHomePageComponent,
  StudentHomePageComponent,
  AjouterEntrepriseAdminPageComponent,
  AjouterStageAdminPageComponent,
  AjouterEntrepriseStudentPageComponent,
  AjouterPaysPageComponent,
  AjouterStageStudentPageComponent,
  GestionAppointmentComponent} from './back-office';

// import {UserListComponent} from './users/user-list/user-list.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'homePage', component: HomePageComponent},
  {path: 'country', component: CountryPageComponent},
  {path: 'company', component: CompanyPageComponent},
  {path: 'companies-search', component: CompanySearchPageComponent},
  {path: 'contactPage', component: ContactPageComponent},

  {path: 'connection', component: ConnectionPageComponent},

  {path: 'adminHomePage', component: AdminHomePageComponent},
  {path: 'ajouterPays', component: AjouterPaysPageComponent},
  {path: 'ajouterAdminEntreprise', component: AjouterEntrepriseAdminPageComponent},
  {path: 'ajouterAdminStage', component: AjouterStageAdminPageComponent},
  {path: 'gestionRendezVous', component: GestionAppointmentComponent},
  
  {path: 'studentHomePage', component: StudentHomePageComponent},
  {path: 'ajouterStudentEntreprise', component: AjouterEntrepriseStudentPageComponent},
  {path: 'ajouterStudentStage', component: AjouterStageStudentPageComponent}
    // {path: 'users', component: UserListComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {

}
