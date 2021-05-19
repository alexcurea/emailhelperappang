import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from './model/user';
import { AuthenticationService } from './service/authentication.service';
import { TokenStorageService } from './service/token-storage.service';
import { UserService } from './service/users.service';

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
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;
  
  constructor(private router: Router, private authenticationService: AuthenticationService,
    private tokenStorageService: TokenStorageService) {}
  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }
  }

  onChanges(): void {
    this.currentView.valueChanges.subscribe(formVal => {
      console.log(formVal);
      this.router.navigateByUrl(formVal);
    });
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

}

