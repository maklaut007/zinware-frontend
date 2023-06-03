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

  constructor(private apiService: ApiService, private router: Router) {}

  onSubmit() {
    this.apiService.loginUser(this.user).subscribe((data: any) => {
      if (data) {
        // Save jwt to local storage
        localStorage.setItem('jwt', data.message);
        console.log(localStorage);
        // Redirect to the "/categories" page
        this.router.navigate(['/categories']);
      }
    });
  }
}
