import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: "", component:HomeComponent, pathMatch: 'full'},
  {path: 'privacypolicy', component:PrivacypolicyComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
