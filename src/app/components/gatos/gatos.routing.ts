import { CreateCatComponent } from './create-cat/create-cat.component';
import { Route } from '@angular/router';
import { GatosResolver } from './gatos.resolver';
import { GatosComponent } from './gatos/gatos.component';

export const gatosRoutes: Route[] = [
  {
    path: '',
    component: GatosComponent,
    resolve: {
      template: GatosResolver,
    },
  },
  {
    path: 'form',
    component: CreateCatComponent,
  },
];
