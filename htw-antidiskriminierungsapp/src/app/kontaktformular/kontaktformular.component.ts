import { Component } from '@angular/core';

@Component({
  selector: 'app-kontaktformular',
  templateUrl: './kontaktformular.component.html',
  styleUrls: ['./kontaktformular.component.css']
})
export class KontaktformularComponent {
  formData = {
    mitgliedergruppe: '',
    betroffenheit:'',
    geschichte:'',
    category: '',
    lastname: '',
    firstname:'',
    email:'',
    message: '',
    checkbox:''
  };

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