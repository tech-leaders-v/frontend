import { Component, OnInit } from '@angular/core';
import { MentorsService } from '../mentors.service';
import { UserModel } from '../shared/models/UserModel';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.template.html',
  styleUrls: ['./summary.style.css'],
  providers: [MentorsService]
})
export class SummaryComponent implements OnInit {

  users: UserModel[];
  displayedUser: UserModel;

  constructor(private mentorsService: MentorsService,
  ) {
    this.mentorsService.getAllMentors()
      .subscribe((mentors: UserModel[]) => {
        this.users = mentors;
      })
      console.log('users: ', this.users);
  }

  ngOnInit(): void {
    document.getElementById("card-list")
    .addEventListener('wheel', function (event) {
      if (event.deltaMode == event.DOM_DELTA_PIXEL) {
        var modifier = 1;
      } else if (event.deltaMode == event.DOM_DELTA_LINE) {
        var modifier = parseInt(getComputedStyle(this).lineHeight);
      } else if (event.deltaMode == event.DOM_DELTA_PAGE) {
        var modifier = this.clientHeight;
      }
      if (event.deltaY != 0) {
        this.scrollLeft += modifier * event.deltaY;
        event.preventDefault();
      }
    });
  }

  showProfile(user: UserModel): void {
    this.displayedUser = user;
    console.log('username: ', user.fullName);
  }

}
