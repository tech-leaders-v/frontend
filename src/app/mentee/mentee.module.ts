import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared';
import { MenteeComponent } from './mentee.component';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', component: MenteeComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [MenteeComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class MenteeModule { }
