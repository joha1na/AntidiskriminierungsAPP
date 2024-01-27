import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private emailUrl = 'http://localhost:3000/send-email'; // Replace with your backend URL

  constructor(private http: HttpClient) { }

  sendEmail(lastname: string) {
    const data = {
      lastname: lastname,
    };
    return this.http.post(this.emailUrl, data);
  }
}
