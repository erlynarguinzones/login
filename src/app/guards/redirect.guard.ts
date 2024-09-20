import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root',
})
export class RedirectGuard implements CanActivate {
  constructor(private UserService: UserService, private router: Router) {}

  canActivate(): boolean {
    if (this.UserService.isLoggedIn()) {
      this.router.navigate(['/home']);
      return false;
    }
    return true;
  }
}
