import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  getTokenFromLocalStorage(): boolean {
    const token = localStorage.getItem('jwt');
    return !!token;
  }
}
