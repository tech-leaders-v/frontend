import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared';
import { MentorsComponent } from './mentors.component';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', component: MentorsComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [MentorsComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class MentorsModule { }
