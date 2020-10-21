import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { UiSharedModule } from './ui-shared.module';

@NgModule({
    imports: [UiSharedModule],
    exports: [UiSharedModule]
  })
  export class SharedModule { }
  