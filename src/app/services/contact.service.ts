import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ContactData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  // � URL de tu backend (cambiar según tu servidor)
  private apiUrl = 'http://localhost:3000/api/contact'; // Para desarrollo local
  // private apiUrl = 'https://tudominio.com/api/contact'; // Para producción

  constructor(private http: HttpClient) { }

  /**
   * Envía el mensaje al backend, que lo reenvía a WhatsApp
   */
  sendMessage(data: ContactData): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
