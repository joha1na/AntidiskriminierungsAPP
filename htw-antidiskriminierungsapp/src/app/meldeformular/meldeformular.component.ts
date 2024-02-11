import { Component, OnInit } from '@angular/core';
import { EmailService } from '../shared/email.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meldeformular',
  templateUrl: './meldeformular.component.html',
  styleUrls: ['./meldeformular.component.css']
})

export class MeldeformularComponent implements OnInit {
  formData = {
    mitgliedergruppe: '',
    betroffenheit: 'NA',
    message: '',
    category: '',
    lastname: '',
    firstname: '',
    email: '',
    checkbox: '',
    formulartyp: 'Meldeformular'
  };

  constructor(private emailService: EmailService, private router: Router) { }

  ngOnInit(): void {
    // Initialisierungslogik, z.B. Daten abrufen
    this.openModel();
  }

  isLoggedIn = true;

  
  isLogged()
  {
    this.isLoggedIn = false;
  }

  submitForm() {
    this.emailService.sendEmail(this.formData.mitgliedergruppe, this.formData.betroffenheit, this.formData.message, this.formData.category, this.formData.lastname, this.formData.firstname, this.formData.email, this.formData.checkbox, this.formData.formulartyp).subscribe(
      {
        next: (response) => {
          console.log(response);
          // Erfolgreicher Aufruf - Navigiere zur Success-Komponente für das Meldeformular
          this.router.navigate(['/meldesuccess']);
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

  openModel() {
    const modelDiv = document.getElementById('MyModal');
    if (modelDiv!= null)
    {
      modelDiv.style.display = 'block';
    } 
  }

  CloseModel() {
    const modelDiv = document.getElementById('MyModal');
    if (modelDiv!= null)
    {
      modelDiv.style.display = 'none';
    }  
  }
  
  weiter = false;

  onWeiter() { this.weiter = true; }

  

  goBack() {this.weiter = false;}

}