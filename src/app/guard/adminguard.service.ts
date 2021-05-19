import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { TokenStorageService } from './../service/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanActivate {
  constructor(
      private router: Router,
      private tokenStorageService: TokenStorageService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      const isLoggedIn = !!this.tokenStorageService.getToken();
      if (isLoggedIn) {
        const user = this.tokenStorageService.getUser();
        const roles = user.roles;

      if(roles.includes('ROLE_ADMIN')){
        return true;
      }       
      else{
        this.router.navigate([''], { queryParams: { returnUrl: state.url } });
        return false;
      }
      }
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
      return false;
    }
}
