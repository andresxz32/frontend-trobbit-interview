import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoFocusDirective } from './auto-focus.directive';
import { PreventDoubleClickDirective } from './prevent-double-click.directive';
import { LazyImgDirective } from './lazy-img.directive';

@NgModule({
  declarations: [AutoFocusDirective, PreventDoubleClickDirective,LazyImgDirective],
  imports: [CommonModule],
  exports: [AutoFocusDirective, PreventDoubleClickDirective,LazyImgDirective],
})
export class DirectivesModule {}
