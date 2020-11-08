import { NgModule } from '@angular/core';
import { UiSharedModule } from './ui-shared.module';

@NgModule({
  imports: [UiSharedModule],
  exports: [UiSharedModule],
})
export class SharedModule {}
