import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared';
import { PersonalPageComponent } from './personal-page/personal-page.component';
import { TeamMenteeComponent } from './team-mentee/team-mentee.component';
import { MyInfoComponent } from './my-info/my-info.component';
import { MyMentorComponent } from './my-mentor/my-mentor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileRoutingModule } from './profile-routing.module';
import { MyRequestsComponent } from './my-requests/my-requests.component';

@NgModule({
  declarations: [
    PersonalPageComponent,
    TeamMenteeComponent,
    MyInfoComponent,
    MyMentorComponent,
    MyRequestsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProfileRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    PersonalPageComponent,
    TeamMenteeComponent,
    MyInfoComponent,
    MyMentorComponent,
    MyRequestsComponent,
  ],
})
export class ProfileModule {}
