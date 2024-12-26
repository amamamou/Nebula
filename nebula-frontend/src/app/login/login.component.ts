import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = 'amamou';
  password: string = 'karam';

  constructor(private router: Router) {}

  onSubmit() {
    if (this.username === 'samantha' && this.password === 'karam') {
      console.log('Login successful with:', this.username, this.password);
      this.router.navigate(['/admin/dashboard/home']); // Redirect to admin dashboard
    } else {
      console.log('Invalid username or password');
      alert('Invalid username or password');
    }
  }
}
