import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared';
import { MentorsComponent } from './mentors.component';

@NgModule({
  declarations: [MentorsComponent],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class MentorsModule { }
