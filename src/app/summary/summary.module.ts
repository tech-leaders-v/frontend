import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared';
import { SummaryComponent } from './summary.component';
import { RouterModule, Routes } from '@angular/router';
import { UserCardComponent } from './user-card/user-card.component';

export const routes: Routes = [
  { path: '', component: SummaryComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [SummaryComponent, UserCardComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class SummaryModule { }
