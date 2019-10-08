import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {AuthService} from './core/auth/service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'woopSicredi';
  constructor(private router: Router,
              private authService: AuthService) {}
  ngOnInit() {
      this.router.navigate(['/dragons/list']);
  }

  logout() {
    this.authService.logout();
    location.reload();
  }
}
