import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { routes } from '../dashboard/dashboard.routes';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    MatToolbarModule,
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  exports: [DashboardComponent],
})
export class DashboardModule { }
