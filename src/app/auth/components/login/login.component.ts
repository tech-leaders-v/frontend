import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LocalStorageService]
})
export class LoginComponent implements OnInit {
  public avatarUrl = '../../../assets/iron-man.jpg';
  currentUsername: string;
  public loginForm = this.fb.group({
    username: [''],
    password: [''],
  });

  constructor(
    private fb: FormBuilder,
    private route: Router,
    private localStorageService: LocalStorageService,
  ) { 
 
  }

  public ngOnInit(): void { }

  public onSubmit(): void {
    if (this.localStorageService.get('login') === this.loginForm.controls.username.value && this.localStorageService.get('password') === this.loginForm.controls.password.value) {
      this.route.navigate(['/dashboard']);
    }
  }
}
