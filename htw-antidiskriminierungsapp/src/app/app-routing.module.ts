import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImprintComponent } from './imprint/imprint.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { HomeComponent } from './home/home.component';
import { FaqComponent } from './faq/faq.component';
import { GetincontactComponent } from './getincontact/getincontact.component'
import { SuccessComponent } from './success/success.component';
import { ErrorComponent } from './error/error.component';
import { MeldeformularComponent } from './meldeformular/meldeformular.component';

const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: 'full' },
  { path: 'imprint', component: ImprintComponent, pathMatch: 'full' },
  { path: 'privacypolicy', component: PrivacypolicyComponent, pathMatch: 'full' },
  { path: 'faq', component: FaqComponent },
  { path: 'getincontact', component: GetincontactComponent},
  /*ggf. wieder entfernen, zunächst nur fürs Zeigen benötigt*/
  { path: 'success', component: SuccessComponent},
  { path: 'error', component: ErrorComponent},
  { path: 'meldeformular', component: MeldeformularComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
