import { Component, OnDestroy, OnInit } from '@angular/core';
import { KontaktformularService } from '../kontaktformular.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { EmailContactService } from '../shared/email-contact.service';


@Component({
  selector: 'app-kontaktformular',
  templateUrl: './kontaktformular.component.html',
  styleUrls: ['./kontaktformular.component.css']
})
export class KontaktformularComponent implements OnInit {

  emailContactPerson: any = '';

  constructor(private kontaktformularService: KontaktformularService, private router: Router, private location: Location, private emailService: EmailContactService) { }

  async ngOnInit(): Promise<void> {
    this.emailContactPerson = '';
    this.emailContactPerson = this.setContactPersonEmail(this.emailService);
  }




  formData = {
    mitgliedergruppe: '',
    betroffenheit: '',
    message: '',
    category: '',
    lastname: '',
    firstname: '',
    email: '',
    checkbox: ''
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
    // Hier kannst du die Logik für das Absenden des Formulars implementieren,
    // z. B. eine HTTP-Anfrage an den Server senden, um die Daten zu verarbeiten.
    console.log('Formulardaten:', this.formData);
    // Hier könnte die Logik stehen, um die Formulardaten zu senden oder zu verarbeiten.
  }


  weiter = false;


  onWeiter() { this.weiter = true; }




  goBack() { this.weiter = false; }

  navigateBack() {
    this.location.back();
  }

}