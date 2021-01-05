import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { UserModel } from '../shared/models/UserModel';
import { MentorsService } from '../mentors.service';

@Component({
  selector: 'app-mentors',
  templateUrl: './mentors.component.html',
  styleUrls: ['./mentors.component.css'],
  providers: [MentorsService]
})
export class MentorsComponent implements OnInit {

  dataSource: MatTableDataSource<UserModel>;
  displayedColumns: string[] = ['fullName', 'email', 'skills', 'links'];

  searchQuery = new Subject<string>();
  searchResults: any;
  pending: boolean;

  constructor(
    private mentorsService: MentorsService,
    private router: Router
  ) {
    this.mentorsService.getAllMentors()
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
