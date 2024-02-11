import { Component, OnDestroy, OnInit } from '@angular/core';
import { KontaktformularService } from '../kontaktformular.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { EmailContactService } from '../shared/email-contact.service';
import { EmailService } from '../shared/email.service';


@Component({
  selector: 'app-kontaktformular',
  templateUrl: './kontaktformular.component.html',
  styleUrls: ['./kontaktformular.component.css']
})
export class KontaktformularComponent implements OnInit {

  emailContactPerson: any = '';

  constructor(private kontaktformularService: KontaktformularService, private router: Router, private location: Location, private emailContactService: EmailContactService, private emailService: EmailService) { }


  async ngOnInit(): Promise<void> {
    this.emailContactPerson = '';
    this.emailContactPerson = this.setContactPersonEmail(this.emailContactService);
  }




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
  contactPersonEmail: string = '';

  setContactPersonEmail(emailService: EmailContactService) {
    this.emailContactPerson = '';
    const email = emailService.getContactPersonEmail();

    if (email) {
      this.emailContactPerson = email;    //emailContactPerson ist die E-Mail Adresse der Kontaktperson 
    }
    //für else{} könnte man eine generelle antidiskriminierungsemail Adresse angeben. z.B else {this.emailContactPerson = 'antidiskriminierung@htw-berlin.de'}
  }


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