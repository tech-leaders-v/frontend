import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

const ELEMENT_DATA = [
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
  selector: 'app-team-mentee',
  templateUrl: './team-mentee.component.html',
  styleUrls: ['./team-mentee.component.css'],
})
export class TeamMenteeComponent implements OnInit {
  displayedColumns: string[] = ['name', 'email', 'link', 'skills'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor() {}

  public ngOnInit(): void {}

  public applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
