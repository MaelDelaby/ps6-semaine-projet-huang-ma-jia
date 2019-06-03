import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent, 
  CountryPageComponent, 
  CompanyPageComponent, 
  CompanySearchPageComponent, 
  ContactPageComponent,
  ConnectionPageComponent} from './front-office';
import {AdminHomePageComponent, 
  AjouterEntreprisePageComponent, 
  AjouterPaysPageComponent, 
  AjouterStagePageComponent} from './back-office';

// import {UserListComponent} from './users/user-list/user-list.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'homePage', component: HomePageComponent},
  {path: 'country', component: CountryPageComponent},
  {path: 'company', component: CompanyPageComponent},
  {path: 'companies-search', component: CompanySearchPageComponent},
  {path: 'contactPage', component: ContactPageComponent},
  {path: 'adminHomePage', component: AdminHomePageComponent},
  {path: 'adminAjouterEntreprise', component: AjouterEntreprisePageComponent},
  {path: 'adminAjouterPays', component: AjouterPaysPageComponent},
  {path: 'adminAjouterStage', component: AjouterStagePageComponent},
  {path: 'connection', component: ConnectionPageComponent},
    // {path: 'users', component: UserListComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {

}
