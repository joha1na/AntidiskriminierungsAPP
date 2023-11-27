import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImprintComponent } from './imprint/imprint.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: "", component:HomeComponent},
  {path: 'imprint', component: ImprintComponent},
  {path: 'impressum', component: ImpressumComponent},
  {path: 'privacypolicy', component:PrivacypolicyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
