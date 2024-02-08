import { Component, OnInit } from '@angular/core';
import { EmailService } from '../shared/email.service';

@Component({
  selector: 'app-meldeformular',
  templateUrl: './meldeformular.component.html',
  styleUrls: ['./meldeformular.component.css']
})

export class MeldeformularComponent implements OnInit {
  formData = {
    mitgliedergruppe: '',
    message: '',
    category: '',
    lastname: '',
    firstname: '',
    email: '',
    checkbox: ''
  };

  constructor(private emailService: EmailService) { }

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
    this.emailService.sendEmail(this.formData.mitgliedergruppe, this.formData.message, this.formData.category, this.formData.lastname, this.formData.firstname, this.formData.email, this.formData.checkbox).subscribe(
      {
        next: (response) => {
          console.log(response);
        },
        error: (err) => console.log(err),
        complete: console.info
      }
    );
    console.log('Formulardaten:', this.formData);
    // Hier könnte die Logik stehen, um die Formulardaten zu senden oder zu verarbeiten.

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