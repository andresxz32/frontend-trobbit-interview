import { ImagenesComponent } from './imagenes/imagenes.component';
import { Route } from '@angular/router';
import { ImagesResolver } from './images.resolver';

export const imagenesRoutes: Route[] = [
  {
    path: '',
    component: ImagenesComponent,
    resolve: {
      template: ImagesResolver,
    },
  },
];
