import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CountryPageComponent} from './countries/country-page';
import {CompanyPageComponent} from './company/company-page';
import {CompanySearchPageComponent} from './company-search/company-search-page/company-search-page.component';
import {HomePageComponent} from './homePage/home-page';
import {AdminHomePageComponent} from './admin';
import {AjouterEntreprisePageComponent, AjouterPaysPageComponent, AjouterStagePageComponent} from './admin';
import {ContactPageComponent} from './contactPage/contact-page.component';

// import {UserListComponent} from './users/user-list/user-list.component';

const routes: Routes = [
  {path: 'companies-search', component: CompanySearchPageComponent},
  {path: 'company', component: CompanyPageComponent},
  {path: 'country', component: CountryPageComponent},
  {path: '', component: HomePageComponent},
  {path: 'homePage', component: HomePageComponent},
  {path: 'contactPage', component: ContactPageComponent},
  {path: 'adminHomePage', component: AjouterStagePageComponent},
  {path: 'adminAjouterPays', component: AjouterPaysPageComponent},
  {path: 'adminAjouterEntreprise', component: AjouterEntreprisePageComponent},
  {path: 'adminAjouterStage', component: AjouterStagePageComponent},
    // {path: 'users', component: UserListComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {


}
