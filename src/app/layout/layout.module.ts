import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { routes } from '../layout/layout.routes';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    MatToolbarModule,
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  exports: [LayoutComponent],
})
export class LayoutModule { }
