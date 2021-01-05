import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-team-mentee',
  templateUrl: './team-mentee.component.html',
  styleUrls: ['./team-mentee.component.css'],
})
export class TeamMenteeComponent implements OnInit {
  @Input() team_mentee_list: any;
  displayedColumns: string[] = ['name', 'email', 'skills', 'link'];
  public dataSource: any;

  constructor() {}

  public ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.team_mentee_list);
  }

  public applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
