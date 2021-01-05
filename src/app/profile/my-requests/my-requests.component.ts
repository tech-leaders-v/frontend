import { Component, Input, OnInit } from '@angular/core';

const income_mentor_list = [
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
  selector: 'app-my-requests',
  templateUrl: './my-requests.component.html',
  styleUrls: ['./my-requests.component.css'],
})
export class MyRequestsComponent implements OnInit {
  @Input() mentors_list: any;
  public income_mentor_list: any;

  constructor() {}

  ngOnInit(): void {
    this.income_mentor_list = income_mentor_list;
  }
}
