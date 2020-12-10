import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared';
import { SummaryComponent } from './summary.component';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', component: SummaryComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [SummaryComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class SummaryModule { }
