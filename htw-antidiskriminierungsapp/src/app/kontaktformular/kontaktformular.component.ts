import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'; // Stellen Sie sicher, dass NgForm importiert ist
import { MatStepper } from '@angular/material/stepper';


@Component({
  selector: 'app-kontaktformular',
  templateUrl: './kontaktformular.component.html',
  styleUrls: ['./kontaktformular.component.css']
})
export class KontaktformularComponent {
  @ViewChild('contactForm', { static: false }) contactForm: NgForm | undefined;
  @ViewChild('stepper') stepper!: MatStepper; // ViewChild für den Stepper

  formData = {
    mitgliedergruppe: '',
    betroffenheit:'',
    geschichte:'',
    category: '',
    lastname: '',
    firstname:'',
    email:'',
    message: '',

  };

  selectMitgliedergruppe(selectedGroup: string): void {
    this.formData.mitgliedergruppe = selectedGroup;
  }

  nextStep() {
    this.stepper.next();
  }

  // Funktion zum Wechseln zum vorherigen Schritt
  previousStep() {
    this.stepper.previous();
  }
  submitForm() {
    // Hier kannst du die Logik für das Absenden des Formulars implementieren,
    // z. B. eine HTTP-Anfrage an den Server senden, um die Daten zu verarbeiten.
    console.log('Formulardaten:', this.formData);
    // Hier könnte die Logik stehen, um die Formulardaten zu senden oder zu verarbeiten.
  }
  
}
