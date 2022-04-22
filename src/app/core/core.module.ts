import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { HorizontalNavigationModule } from './components/horizontal-navigation/horizontal-navigation.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, RouterModule, HorizontalNavigationModule],
  exports: [LayoutComponent],
})
export class CoreModule {}
