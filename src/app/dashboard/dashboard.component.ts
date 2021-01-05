import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  userName: string;

  constructor(
    private localStorageService: LocalStorageService,
    private route: Router,
  ) {
    this.userName = this.localStorageService.get('login');
   }

  ngOnInit(): void {
  }

  signOut(): void {
    this.route.navigate(['/auth/login']);
    this.localStorageService.remove('login');
    this.localStorageService.remove('password');
  }
}
