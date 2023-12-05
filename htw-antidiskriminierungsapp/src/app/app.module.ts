import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ImprintComponent } from './imprint/imprint.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { KontaktformularComponent } from './kontaktformular/kontaktformular.component';
import { KontaktseiteComponent } from './kontaktseite/kontaktseite.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatStepper, MatStepperModule } from '@angular/material/stepper';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    ImprintComponent,
    PrivacypolicyComponent,
    KontaktformularComponent,
    KontaktseiteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatChipsModule,
    MatIconModule
     // Füge FormsModule hier hinzu
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
