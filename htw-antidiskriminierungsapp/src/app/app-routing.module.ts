import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImprintComponent } from './imprint/imprint.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { HomeComponent } from './home/home.component';
import { KontaktformularComponent } from './kontaktformular/kontaktformular.component';

const routes: Routes = [
  {path: "", component:HomeComponent, pathMatch: 'full'},
  {path: 'imprint', component: ImprintComponent},
  {path: 'privacypolicy', component:PrivacypolicyComponent},
  {path: 'kontaktformular', component:KontaktformularComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
