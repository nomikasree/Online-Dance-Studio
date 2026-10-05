import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: any;
  password: any;
  errorMessage: any;
  constructor(private router: Router) { }

  login() {
    if (this.username === 'preethi' && this.password === '123456789') {
      // Redirect to dashboard or perform any other action upon successful login
      console.log('Login successful!');
      this.router.navigate(['/dashboard']);
    } else {
      this.errorMessage = 'Invalid username or password';
    }
  }
}
