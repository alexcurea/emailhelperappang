import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidate } from '../model/candidate';


const HOSTNAME : string = 'http://localhost:9000/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CandidateService {



  constructor(private http: HttpClient) { }

  getCandidates(): Observable<Candidate[]>{
    console.log(this.http.get<Candidate[]>((HOSTNAME + '/candidate')))
    return this.http.get<Candidate[]>(HOSTNAME + '/candidate');
    
  }

  fetchCandidates(){
    return this.http.get<Candidate[]>(HOSTNAME + '/candidate');
  }

    // CREATE, POST METHOD
    createCandidate(candidate: Candidate): Observable<Candidate> {
      return this.http.post<Candidate>(HOSTNAME + 'candidate/create', candidate);
    }
 
    // UPDATE, PUT METHOD
    editCandidate(candidate: Candidate): Observable<Candidate> {
      return this.http.put<Candidate>(HOSTNAME + 'candidate/update', candidate);
   }
 
   // // DELETE METHOD
   deleteCandidate(id: number): Observable<{}> {
     let paramId = String(id);
     let params = new HttpParams().set("id", paramId);
     return this.http.delete<Candidate>(HOSTNAME + 'candidate/delete', {params:params});
   }
   
}
