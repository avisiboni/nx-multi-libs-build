import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiFooterComponent } from './ui-footer.component';

@NgModule({
  imports: [CommonModule],
  declarations:[UiFooterComponent],
  exports:[UiFooterComponent]
})
export class UiFooterModule {}
