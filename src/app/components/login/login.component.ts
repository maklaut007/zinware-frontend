import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUser } from 'src/app/models/user.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  user: LoginUser = {
    email: '',
    password: '',
  };
  errorMessage: string = '';

  constructor(private apiService: ApiService, private router: Router) {}

  /**
   * Submit the form if form is valid and user is logged in.
   * Otherwise, display error message.
   */

  onSubmit() {
    if (this.validateForm()) {
      this.apiService.loginUser(this.user).subscribe((data: any) => {
        if (data) {
          // Save jwt to local storage
          localStorage.setItem('jwt', data.message);
          // Redirect to the "/categories" page
          this.router.navigate(['/categories']);
        }
      });
    }
  }
  /**
   * Validate the form.
   * @returns true if form is valid, false otherwise.
   */
  validateForm(): boolean {
    if (!this.user.email || !this.user.password) {
      this.errorMessage = 'Please fill in all the fields.';
      return false;
    }
    return true;
  }
}
