import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { User } from 'src/app/models/user.mode';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  user: User = {
    userName: '',
    email: '',
    password: '',
  };

  constructor(private apiService: ApiService, private router: Router) {}
  /**
   * Sends the user object to the API service to create a new user
   * redirects to user login page if successfull
   */
  onSubmit() {
    this.apiService.registerUser(this.user).subscribe((data) => {
      if (data) {
        // Redirect to the "/login" page
        this.router.navigate(['/login']);
      }
    });
  }
}
