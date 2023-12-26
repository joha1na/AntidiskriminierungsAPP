import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-meldeformular',
  templateUrl: './meldeformular.component.html',
  styleUrls: ['./meldeformular.component.css']
})
export class MeldeformularComponent implements OnInit{
  formData = {
    mitgliedergruppe: '',
    message:'',
    category: '',
    lastname: '',
    firstname:'',
    email:''
  };

  constructor() { }

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
    // Hier kannst du die Logik für das Absenden des Formulars implementieren,
    // z. B. eine HTTP-Anfrage an den Server senden, um die Daten zu verarbeiten.
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
  
  }



