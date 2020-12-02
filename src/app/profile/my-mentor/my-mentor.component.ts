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
];

@Component({
  selector: 'app-my-mentor',
  templateUrl: './my-mentor.component.html',
  styleUrls: ['./my-mentor.component.css'],
})
export class MyMentorComponent implements OnInit {
  displayedColumns: string[] = ['name', 'email', 'link', 'skills'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor() {}

  public ngOnInit(): void {}

  public applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
