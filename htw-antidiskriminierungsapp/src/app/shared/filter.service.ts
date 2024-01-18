import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  private mitgliedergruppe: string | undefined;
  private gremium: string | undefined;
  private organisationseinheit: string | undefined;
  private sprache: string | undefined;

  constructor() { }

  getMitgliedergruppe(): string | undefined {
    return this.mitgliedergruppe;
  }

  setMitgliedergruppe(newMitgliedergruppe: string) {
    this.mitgliedergruppe = newMitgliedergruppe;
  }

  getGremium(): string | undefined {
    return this.gremium;
  }

  setGremium(newGremium: string) {
    this.gremium = newGremium;
  }

  getOrganisationseinheit(): string | undefined {
    return this.organisationseinheit;
  }

  setOrganisationseinheit(newOrganisationseinheit: string) {
    this.organisationseinheit = newOrganisationseinheit;
  }

  getSprache(): string | undefined {
    return this.sprache;
  }

  setSprache(newSprache: string) {
    this.sprache = newSprache;
  }

}
