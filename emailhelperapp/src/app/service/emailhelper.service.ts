import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmailDto } from '../model/emaildto';

const HOSTNAME : string = 'http://localhost:9000/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'

  
})
export class EmailhelperService {

  constructor(private http: HttpClient) { }

  sendEmail(email: EmailDto): Observable<EmailDto> {
    return this.http.post<EmailDto>(HOSTNAME + 'feedback/send', email);
  }
}
