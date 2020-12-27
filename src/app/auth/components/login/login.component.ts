import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public avatarUrl = '../../../assets/iron-man.jpg';
  public loginForm = this.fb.group({
    username: [''],
    password: [''],
  });

  constructor(private fb: FormBuilder, private route: Router) {}

  public ngOnInit(): void {}

  public onSubmit(): void {
    if (
      this.loginForm.controls.username.value === 'test' &&
      this.loginForm.controls.password.value === 'test'
    ) {
      this.route.navigate(['/dashboard']);
    }
  }
}
