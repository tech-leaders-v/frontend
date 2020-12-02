import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-page',
  templateUrl: './personal-page.component.html',
  styleUrls: ['./personal-page.component.css'],
})
export class PersonalPageComponent implements OnInit {
  public avatarUrl = '../../assets/iron-man.jpg';

  constructor(private router: Router) {}

  public ngOnInit(): void {}

  public btnClick = function (): void {
    this.router.navigate(['/overview']);
  };
}
