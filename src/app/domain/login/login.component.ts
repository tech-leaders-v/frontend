import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  public loginForm = this.fb.group({
    username: [null],
    password: [null]
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {

  }

  onSubmit(): void {

  }

}
