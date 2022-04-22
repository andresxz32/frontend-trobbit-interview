import { Route } from '@angular/router';
import { LayoutComponent } from './core/components/layout/layout.component';

export const appRoutes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'inicio' },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'inicio',
        loadChildren: () =>
          import('src/app/components/inicio/inicio.module').then(
            (m) => m.InicioModule
          ),
      },
      {
        path: 'gatos',
        loadChildren: () =>
          import('src/app/components/gatos/gatos.module').then(
            (m) => m.GatosModule
          ),
      },
      {
        path: 'imagenes',
        loadChildren: () =>
          import('src/app/components/imagenes/imagenes.module').then(
            (m) => m.ImagenesModule
          ),
      },
    ],
  },
];
