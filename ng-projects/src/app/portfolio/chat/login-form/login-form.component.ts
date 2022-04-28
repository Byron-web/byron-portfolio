import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  email: string = '';
  password: string = '';

  constructor(public authService: AuthService, public router: Router) {}

  public login() {
    if (this.email != 'test@test.com' || this.password != 'testing') {
      alert('Invalid user, Fokoff');
      return;
    }

    this.authService.login().subscribe(() => {
      if (this.authService.isLoggedIn) {
        // Redirect the user
        this.router.navigate([this.authService.redirectUrl]);
      }
    });
  }
}
