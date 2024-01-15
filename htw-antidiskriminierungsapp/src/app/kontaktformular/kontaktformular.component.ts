import { Component } from '@angular/core';
import { KontaktformularService } from '../kontaktformular.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-kontaktformular',
  templateUrl: './kontaktformular.component.html',
  styleUrls: ['./kontaktformular.component.css']
})
export class KontaktformularComponent {
  formData = {
    mitgliedergruppe: '',
    betroffenheit:'',
    message: '',
    category: '',
    lastname: '',
    firstname:'',
    email:'',
    checkbox:''
  };

  constructor(private kontaktformularService: KontaktformularService, private router:Router) {}

  submitForm() {
    // Hier kannst du die Logik für das Absenden des Formulars implementieren,
    // z. B. eine HTTP-Anfrage an den Server senden, um die Daten zu verarbeiten.
    console.log('Formulardaten:', this.formData);
    // Hier könnte die Logik stehen, um die Formulardaten zu senden oder zu verarbeiten.
  }

  
  weiter = false;

  
  onWeiter() { this.weiter = true; }


  

  goBack() {this.weiter = false;}

}