import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class EmailContactService {

  private emailContactPerson: string | undefined;

  constructor() { }

  getContactPersonEmail(): string | undefined {
    return this.emailContactPerson;
  }

  setContactPersonEmail(email: string | undefined) {
    this.emailContactPerson = email;
    return this.emailContactPerson;
  }
}
