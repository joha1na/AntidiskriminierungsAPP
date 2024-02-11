import { Component } from '@angular/core';
import { KontaktformularService } from '../kontaktformular.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { EmailService } from '../shared/email.service';


@Component({
  selector: 'app-kontaktformular',
  templateUrl: './kontaktformular.component.html',
  styleUrls: ['./kontaktformular.component.css']
})
export class KontaktformularComponent {
  formData = {
    mitgliedergruppe: '',
    betroffenheit: '',
    message: '',
    category: '',
    lastname: '',
    firstname: '',
    email: '',
    checkbox: '',
    formulartyp: 'Kontaktformular'
  };

  constructor(private kontaktformularService: KontaktformularService, private router: Router, private location: Location, private emailService: EmailService) { }

  submitForm() {
    this.emailService.sendEmail(this.formData.mitgliedergruppe, this.formData.betroffenheit, this.formData.message, this.formData.category, this.formData.lastname, this.formData.firstname, this.formData.email, this.formData.checkbox, this.formData.formulartyp).subscribe(
      {
        next: (response) => {
          console.log(response);
          // Erfolgreicher Aufruf - Navigiere zur Success-Komponente für das Meldeformular
          this.router.navigate(['/kontaktsuccess']);
        },
        error: (err) => {
          console.log(err);
          // Fehlgeschlagener Aufruf - Navigiere zur Failure-Komponente
          this.router.navigate(['/error']);
        },  
        complete: () => console.info('Aufruf abgeschlossen')
      }
    );
    console.log('Formulardaten:', this.formData);
  }


  weiter = false;


  onWeiter() { this.weiter = true; }




  goBack() { this.weiter = false; }

  navigateBack() {
    this.location.back();
  }

}