import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';
import { HTTP_OPTIONS } from './../header.config';

@Injectable({
  providedIn: 'root'
})


export class UserService {

  private readonly HOSTNAME : string = 'http://localhost:9000';

  
  
  constructor(private http: HttpClient) { }

  getAll() {
      return this.http.get<User[]>(`${this.HOSTNAME}/users`);
  }

  getById(id: number) {
      return this.http.get(`${this.HOSTNAME}/users/${id}`);
  }

  register(user: User) {
      return this.http.post(`${this.HOSTNAME}/users/registration`, JSON.stringify(user));
  }

  update(user: User) {
      return this.http.put(`${this.HOSTNAME}/users/${user.id}`, JSON.stringify(user));
  }

  delete(id: number) {
      return this.http.delete(`${this.HOSTNAME}/users/${id}`);
  }
  
}
