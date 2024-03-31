import { Component, OnInit, inject } from '@angular/core';
import { ContactsService } from './../shared/contacts.service';
import { Contacts } from '../shared/contacts';
import { FilterService } from '../shared/filter.service';
import { EmailContactService } from '../shared/email-contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.css']
})
export class ContactlistComponent implements OnInit {

  constructor(private filterService: FilterService, private emailService: EmailContactService, private router: Router) { }

  private service = inject(ContactsService);
  allcontacts: Contacts[] = [];
  filteredContacts: Contacts[] = [];
  emailContactPerson: string = '';
  nachnameContactPerson: string = '';
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

  contactPerson(emailToBeShared: string, titelToBeShared: string, vornameToBeShared: string, nachnameToBeShared: string) {
    this.emailService.setContactPersonEmail(emailToBeShared);
    this.emailService.setContactPersonTitel(titelToBeShared);
    this.emailService.setContactPersonVorname(vornameToBeShared);
    this.emailService.setContactPersonNachname(nachnameToBeShared);
    this.router.navigate(['/kontaktformular']);
  }

  showFilterMsg() {
    this.showFilterMessage = true;

    setTimeout(() => {
      this.showFilterMessage = false;
    }, 8000);
  }
}