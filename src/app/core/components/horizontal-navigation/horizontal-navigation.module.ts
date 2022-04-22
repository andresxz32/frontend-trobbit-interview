import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorizontalNavigationComponent } from './horizontal-navigation.component';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [HorizontalNavigationComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
  ],
  exports: [HorizontalNavigationComponent],
})
export class HorizontalNavigationModule {}
