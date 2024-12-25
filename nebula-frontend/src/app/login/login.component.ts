import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = 'amamou';
  password: string = 'karam';

  onSubmit() {
    // Handle login logic here
    if (this.username && this.password) {
      console.log('Login successful with:', this.username, this.password);
      // You can now integrate with a backend service to authenticate the user
    }
  }
}
