import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared';
import { MentorsComponent } from './mentors.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

export const routes: Routes = [
  { path: '', component: MentorsComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [MentorsComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export class MentorsModule { }
