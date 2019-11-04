import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DebounceValueDirective } from './debounce-value.directive';


@NgModule({
  imports: [CommonModule],
  declarations: [DebounceValueDirective],
  exports: [DebounceValueDirective]
})
export class DebounceValueModule {}
