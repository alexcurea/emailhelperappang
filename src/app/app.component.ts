import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from './model/user';
import { TokenStorageService } from './service/token-storage.service';
import { CandidateService } from './service/candidate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'helpdesk-frontend';
  currentUser: User;
  currentView: FormControl = new FormControl;
  private roles: string[] = [];
  isLoggedIn = false;
  showUserBoard = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;
  email?: string;
  isSubscribed = false;
  
  constructor(private router: Router,
    private tokenStorageService: TokenStorageService,
    private candidateService: CandidateService) {}
  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
      this.showUserBoard = this.roles.includes('ROLE_USER');

      this.username = user.username;
      this.email = user.email;
      if(this.showUserBoard){
        this.candidateService.getCandidate(this.email).subscribe(
          data => {
            if(data.isSubscribed){
              this.isSubscribed = data.isSubscribed;
            }
          }
        );
      }
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

  subscribe(value){
    this.isSubscribed=!value;
    this.candidateService.subscribe(this.email, !value).subscribe(()=>{
      console.log('succes!');
    })
  };

}

