import { Component } from '@angular/core';

@Component({
  selector: 'app-meldeformular',
  templateUrl: './meldeformular.component.html',
  styleUrls: ['./meldeformular.component.css']
})
export class MeldeformularComponent {
  formData = {
    mitgliedergruppe: '',
    betroffenheit:'',
    geschichte:'',
    category: '',
    lastname: '',
    firstname:'',
    email:'',
    message: ''
  };

  submitForm() {
    // Hier kannst du die Logik für das Absenden des Formulars implementieren,
    // z. B. eine HTTP-Anfrage an den Server senden, um die Daten zu verarbeiten.
    console.log('Formulardaten:', this.formData);
    // Hier könnte die Logik stehen, um die Formulardaten zu senden oder zu verarbeiten.
  }
  

  /*checkboxChanged(){
    var h1arr = document.getElementById('fluency');

    if (!checkbox.checked) {
     let string = "Wir könne sie nicht erreichen";
     let a = document.getElementById('hinweis');
    
     if (a !== null) {
      a.innerHTML = "Wir können Sie nicht erreichen";
      // Hier kannst du weitere Aktionen ausführen, wenn die Checkbox deaktiviert wird
    }
    
  }*/

  
  }



