import { Component } from '@angular/core';
import { FilterService } from '../shared/filter.service';
import { Router } from '@angular/router';

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

  constructor(private filterService: FilterService, private router: Router) { }

  submitForm() {
    // Hier kannst du die Logik für das Absenden des Formulars implementieren,
    // z. B. eine HTTP-Anfrage an den Server senden, um die Daten zu verarbeiten.
    console.log('Formulardaten:', this.formData);
    // Hier könnte die Logik stehen, um die Formulardaten zu senden oder zu verarbeiten.
    this.filterService.setMitgliedergruppe(this.formData.mitgliedergruppe);
    this.router.navigate(['/getincontact']);
  }

}
