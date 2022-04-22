import { imagenesRoutes } from './imagenes.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagenesComponent } from './imagenes/imagenes.component';
import { RouterModule } from '@angular/router';
import { CardCatsComponent } from './card-cats/card-cats.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { DirectivesModule } from 'src/app/core/directives/directives.module';

@NgModule({
  declarations: [ImagenesComponent, CardCatsComponent],
  imports: [
    RouterModule.forChild(imagenesRoutes),
    CommonModule,
    MatCardModule,
    MatButtonModule,
    DirectivesModule,
  ],
})
export class ImagenesModule {}
