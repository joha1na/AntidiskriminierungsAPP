import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImprintComponent } from './imprint/imprint.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { HomeComponent } from './home/home.component';
import { FaqComponent } from './faq/faq.component';

const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: 'full' },
  { path: 'imprint', component: ImprintComponent, pathMatch: 'full' },
  { path: 'privacypolicy', component: PrivacypolicyComponent, pathMatch: 'full' },
  { path: 'faq', component: FaqComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
