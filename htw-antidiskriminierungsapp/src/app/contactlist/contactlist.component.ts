import { Component, OnInit, inject } from '@angular/core';
import { ContactsService } from './../shared/contacts.service';
import { Contacts } from '../shared/contacts';
import { FilterService } from '../shared/filter.service';

@Component({
  selector: 'app-contactlist',
  /*standalone: true,
  imports: [],*/
  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.css']
})
export class ContactlistComponent implements OnInit {
  /*contacts: Contacts[];
  
  constructor(private ds: ContactsService) {
    this.contacts = this.ds.getAllContacts();
  }*/

  constructor(private filterService: FilterService) { }

  private service = inject(ContactsService);
  allcontacts: Contacts[] = [];
  filteredContacts: Contacts[] = [];

  async ngOnInit(): Promise<void> {
    this.allcontacts = await this.service.getAllContacts();
    this.filteredContacts = this.filter(this.filterService);
  }

  filter(filterService: FilterService): Contacts[] {
    let filteredContacts = this.allcontacts;
    const mitgliedergruppe = filterService.getMitgliedergruppe();

    if (mitgliedergruppe) {
      filteredContacts = filteredContacts.filter((contact) => contact.mitgliedergruppe === mitgliedergruppe);
    }

    return filteredContacts;
  }

}
