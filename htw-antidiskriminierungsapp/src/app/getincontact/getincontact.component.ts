import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-getincontact',
  /*standalone: true,
  imports: [],*/
  templateUrl: './getincontact.component.html',
  styleUrls: ['./getincontact.component.css']
})
export class GetincontactComponent {

  constructor(private location: Location) { }

  navigateBack() {
    this.location.back();
  }

}
