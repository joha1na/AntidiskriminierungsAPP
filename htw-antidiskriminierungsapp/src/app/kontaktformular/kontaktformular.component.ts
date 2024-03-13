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
  titelContactPerson: any = '';
  vornameContactPerson: any = '';
  nachnameContactPerson: any = '';
  sprache: any = localStorage.getItem('locale');

  constructor(private kontaktformularService: KontaktformularService, private router: Router, private location: Location, private emailContactService: EmailContactService, private emailService: EmailService) { }


  async ngOnInit(): Promise<void> {
    this.emailContactPerson = '';
    this.titelContactPerson = '';
    this.vornameContactPerson = '';
    this.nachnameContactPerson = '';
    this.emailContactPerson = this.setContactPersonEmail(this.emailContactService);
    this.titelContactPerson = this.setContactPersonTitel(this.emailContactService);
    this.vornameContactPerson = this.setContactPersonVorname(this.emailContactService);
    this.nachnameContactPerson = this.setContactPersonNachname(this.emailContactService);
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
  contactPersonTitel: string = '';
  contactPersonVorname: string = '';
  contactPersonNachname: string = '';

  setContactPersonEmail(emailService: EmailContactService) {
    this.emailContactPerson = '';
    const email = emailService.getContactPersonEmail();

    if (email) {
      this.emailContactPerson = email;    //emailContactPerson ist die E-Mail Adresse der Kontaktperson 
    }
    else {
      this.emailContactPerson = 'antidiskriminierungs-app@htw-berlin.de'; //für else{} eine generelle Antidiskriminierungsemailadresse angeben
    } 
    return this.emailContactPerson;
  }

  setContactPersonTitel(emailService: EmailContactService) {
    this.titelContactPerson = '';
    const titel = emailService.getContactPersonTitel();

    if (titel) {
      this.titelContactPerson = titel;    //titelContactPerson ist der Titel der Kontaktperson 
    }
    //bleibt leer, wenn kein Titel angegeben wurde oder keine Person ausgewählt wurde
    return this.titelContactPerson;
  }

  setContactPersonVorname(emailService: EmailContactService) {
    this.vornameContactPerson = '';
    const vorname = emailService.getContactPersonVorname();

    if (vorname) {
      this.vornameContactPerson = vorname;    //vornameContactPerson ist der Vorname der Kontaktperson 
    }
    //bleibt leer, wenn keine Person ausgewählt wurde
    return this.vornameContactPerson;
  }

  setContactPersonNachname(emailService: EmailContactService) {
    this.nachnameContactPerson = '';
    const nachname = emailService.getContactPersonNachname();

    if (nachname) {
      this.nachnameContactPerson = nachname;    //nachnameContactPerson ist der Nachname der Kontaktperson 
    }
    else {
      this.nachnameContactPerson = 'NA'; //für else{} ein passender Text 
    }
    return this.nachnameContactPerson;
  }


  submitForm() {
    this.emailService.sendEmail(this.formData.mitgliedergruppe, this.formData.betroffenheit, this.formData.message, this.formData.category, this.formData.lastname, this.formData.firstname, this.formData.email, this.formData.checkbox, this.formData.formulartyp, this.emailContactPerson, this.titelContactPerson, this.vornameContactPerson, this.nachnameContactPerson, this.sprache).subscribe(
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