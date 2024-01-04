import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  formData = {
    mitgliedergruppe: '',
    amt: '',
    organisationseinheit: '',
    sprache: ''
  };


  submitForm() {
    // Hier kannst du die Logik für das Absenden des Formulars implementieren,
    // z. B. eine HTTP-Anfrage an den Server senden, um die Daten zu verarbeiten.
    console.log('Formulardaten:', this.formData);
    // Hier könnte die Logik stehen, um die Formulardaten zu senden oder zu verarbeiten.
  }

}
