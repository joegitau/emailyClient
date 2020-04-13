import { Component } from '@angular/core';

import { AuthService } from './auth/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  username: string;
  signedin: false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.signedin$.subscribe(status => this.signedin = status);

    this.authService.checkAuth().subscribe(({ username }) => this.username = username);
  }

}
