import { Component, OnInit, inject } from '@angular/core';
import { ContactsService } from './../shared/contacts.service';
import { Contacts } from '../shared/contacts';
import { FilterService } from '../shared/filter.service';

@Component({
  selector: 'app-contactlist',

  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.css']
})
export class ContactlistComponent implements OnInit {


  constructor(private filterService: FilterService) { }

  private service = inject(ContactsService);
  allcontacts: Contacts[] = [];
  filteredContacts: Contacts[] = [];
  showFilterMessage = false;

  async ngOnInit(): Promise<void> {
    this.allcontacts = await this.service.getAllContacts();
    this.filteredContacts = this.filter(this.filterService);
  }

  filter(filterService: FilterService): Contacts[] {

    let filteredContacts = this.allcontacts;

    const mitgliedergruppe = filterService.getMitgliedergruppe();
    const gremium = filterService.getGremium();
    const organisationseinheit = filterService.getOrganisationseinheit();
    const sprache = this.filterService.getSprache();

    if (mitgliedergruppe || gremium || organisationseinheit || sprache) {
      filteredContacts = filteredContacts.filter((contact) => contact.mitgliedergruppe === mitgliedergruppe || contact.gremium === gremium || contact.organisationseinheit === organisationseinheit || contact.sprache === sprache);
    }
    if (filteredContacts.length < this.allcontacts.length) {
      this.showFilterMsg();
    }
    return filteredContacts;
  }

  showFilterMsg() {
    this.showFilterMessage = true;

    setTimeout(() => {
      this.showFilterMessage = false;
    }, 5000);
  }
}


