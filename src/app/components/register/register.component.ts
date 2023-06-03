import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { User } from 'src/app/models/user.mode';
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

  constructor(private apiService: ApiService) {}

  onSubmit() {
    // this.apiService.registerUser
  }
}
