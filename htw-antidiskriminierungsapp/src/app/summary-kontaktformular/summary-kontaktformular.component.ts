// summary-kontaktformular.component.ts

import { Component, OnInit } from '@angular/core';
import { KontaktformularService } from '../kontaktformular.service';

@Component({
  selector: 'app-summary-kontaktformular',
  templateUrl: './summary-kontaktformular.component.html',
  styleUrls: ['./summary-kontaktformular.component.css'],
})
export class SummaryKontaktformularComponent implements OnInit {
  formData: any = {};

  constructor(private kontaktformularService: KontaktformularService) {}

  ngOnInit() {
    this.formData = this.kontaktformularService.getFormData();
  }
}
