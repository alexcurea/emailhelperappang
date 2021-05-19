import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Newsletter } from '../model/newsletter';

const HOSTNAME : string = 'http://localhost:9000/feedback';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {

  constructor(private http: HttpClient) { }

  fetchNewsletters(): Observable<Newsletter[]>{
    return this.http.get<Newsletter[]>(HOSTNAME + '/newsletter');
  }

  createNewsletter(newsletter: Newsletter): Observable<Newsletter> {
    return this.http.post<Newsletter>(HOSTNAME + '/newsletter/send', newsletter);
  }

}
