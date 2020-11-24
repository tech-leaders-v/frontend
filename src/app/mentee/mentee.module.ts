import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared';
import { MenteeComponent } from './mentee.component';

@NgModule({
  declarations: [MenteeComponent],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class MenteeModule { }
