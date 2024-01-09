import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  private mitgliedergruppe: string | undefined;

  constructor() { }

  getMitgliedergruppe(): string | undefined {
    return this.mitgliedergruppe;
  }

  setMitgliedergruppe(newMitgliedergruppe: string) {
    this.mitgliedergruppe = newMitgliedergruppe;
  }
}
