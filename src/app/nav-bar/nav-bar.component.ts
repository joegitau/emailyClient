import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  signedin = false;
  user: any;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.signedin$.subscribe(status => this.signedin = status);

    this.authService.checkAuth().subscribe(() => ({}));
  }

}
