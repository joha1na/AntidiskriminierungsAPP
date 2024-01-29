import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private emailUrl = 'http://localhost:3000/send-email'; // Replace with your backend URL

  constructor(private http: HttpClient) { }

  sendEmail(mitgliedergruppe: string, message: string, category: string, lastname: string, firstname: string, email: string, checkbox: string) {
    const data = {
      mitgliedergruppe: mitgliedergruppe,
      message: message,
      category: category,
      lastname: lastname,
      firstname: firstname,
      email: email,
      checkbox: checkbox
    };
    return this.http.post(this.emailUrl, data);
  }
}
