import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { UserModel } from '../shared/models/UserModel';
import { MenteeService } from '../mentee.service';

@Component({
  selector: 'app-mentee',
  templateUrl: './mentee.component.html',
  styleUrls: ['./mentee.component.css'],
  providers: [MenteeService]
})
export class MenteeComponent implements OnInit {

  dataSource: MatTableDataSource<UserModel>;
  displayedColumns: string[] = ['fullName', 'email', 'skills', 'links'];

  searchQuery = new Subject<string>();
  searchResults: any;
  pending: boolean;

  constructor(
    private menteeService: MenteeService,
    private router: Router
  ) {
    this.menteeService.getAllMentee()
      .subscribe((data: UserModel[]) => {
        this.dataSource = new MatTableDataSource(data);
      });
  }

  ngOnInit(): void {
  }

  search(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  viewProfile(id: number) {
    this.router.navigate([`/profile/${id}`]);
  }

}
