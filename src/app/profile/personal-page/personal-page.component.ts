import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

const mentors_list = [
  {
    id: 1,
    name: 'Robert Downey Jr.',
    email: '123',
    link: 'https://t.me',
    skills: ['java', 'c#'],
  },
  {
    id: 2,
    name: 'Mark Ruffalo',
    email: '123',
    link: 'https://t.me',
    skills: ['javaScript', 'c#'],
  },
];

const team_mentee_list = [
  {
    id: 1,
    name: 'Robert Downey Jr.',
    email: '123',
    link: 'https://t.me',
    skills: ['java', 'c#'],
  },
  {
    id: 2,
    name: 'Mark Ruffalo',
    email: '123',
    link: 'https://t.me',
    skills: ['javaScript', 'c#'],
  },
  {
    id: 3,
    name: 'Chris Hemsworth',
    email: '123',
    link: 'https://t.me',
    skills: ['vue', 'c#'],
  },
];

@Component({
  selector: 'app-personal-page',
  templateUrl: './personal-page.component.html',
  styleUrls: ['./personal-page.component.css'],
})
export class PersonalPageComponent implements OnInit {
  public avatarUrl = '../../assets/iron-man.jpg';
  public user: any;
  public mentors_list: any;
  public team_mentee_list: any;

  constructor(private router: Router) {}

  public ngOnInit(): void {
    this.mentors_list = mentors_list;
    this.team_mentee_list = team_mentee_list;
    this.user = {
      userType: 'mentor', // | 'mentee';
      fullName: 'Will Smith',
      login: 'hencock',
      email: 'hencock@gmail.com',
      password: 'star11',
      classFormat: ['online'],
      skills: ['java', 'c#'],
      qualificationLevel: 'senior',
      menteeQualificationLevel: ['senior', 'middle'],
      dateOfBirth: new Date('Wed Dec 09 1987 00:00:00 GMT+0300'),
      telegramLink: 'http://',
      aboutYou: 'Superhero',
      base64File: '../../../assets/iron-man.jpg',
    };
  }

  public btnClick = function (): void {
    this.router.navigate(['/dashboard']);
  };

  public onFileSelect(e: any): void {
    try {
      const file = e.target.files[0];
      const fReader = new FileReader();
      fReader.readAsDataURL(file);
      fReader.onloadend = (e: any) => {
        this.user.filename = file.name;
        this.user.base64File = e.target.result;
      };
    } catch (error) {
      this.user.filename = null;
      this.user.base64File = null;
      console.log('no file was selected...');
    }
  }
}
