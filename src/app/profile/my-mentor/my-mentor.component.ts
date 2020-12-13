import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-my-mentor',
  templateUrl: './my-mentor.component.html',
  styleUrls: ['./my-mentor.component.css'],
})
export class MyMentorComponent implements OnInit {
  @Input() mentors_list: any;
  displayedColumns: string[] = ['name', 'email', 'skills', 'link'];
  public dataSource: any;

  constructor() {}

  public ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.mentors_list);
  }

  public applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
