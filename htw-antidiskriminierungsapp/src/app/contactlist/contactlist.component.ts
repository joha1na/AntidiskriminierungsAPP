import { Component, OnInit, inject } from '@angular/core';
import { ContactsService } from './../shared/contacts.service';
import { Contacts } from '../shared/contacts';

@Component({
  selector: 'app-contactlist',
  /*standalone: true,
  imports: [],*/
  templateUrl: './contactlist.component.html',
  styleUrl: './contactlist.component.css'
})
export class ContactlistComponent implements OnInit {
  /*contacts: Contacts[];
  
  constructor(private ds: ContactsService) {
    this.contacts = this.ds.getAllContacts();
  }*/
  private service = inject(ContactsService);
  allcontacts: Contacts[] = [];

  async ngOnInit(): Promise<void> {
    this.allcontacts = await this.service.getAllContacts();
  }

}
