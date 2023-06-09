import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { RegisterUser } from 'src/app/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  user: RegisterUser = {
    userName: '',
    email: '',
    password: '',
  };
  errorMessage: string = '';

  constructor(private apiService: ApiService, private router: Router) {}
  /**
   * Sends the user object to the API service to create a new user
   * redirects to user login page if successfull
   */
  onSubmit() {
    if (this.validateForm()) {
      this.apiService.registerUser(this.user).subscribe((data) => {
        if (data) {
          // Redirect to the "/login" page
          this.router.navigate(['/login']);
        }
      });
    }
  }
  /**
   * Validates the user object to ensure that all fields are filled in correctly
   * and displays an error message if not
   * @returns true if the user object is valid, false otherwise
   */
  validateForm(): boolean {
    if (!this.user.email || !this.user.password || !this.user.userName) {
      this.errorMessage = 'Please fill in all the fields.';
      return false;
    }
    if (
      !this.user.email.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    ) {
      this.errorMessage = 'Email is not valid';
      return false;
    }
    if (this.user.password.length < 6) {
      this.errorMessage = 'Password must be at least 6 characters long';
      return false;
    }
    return true;
  }
}
