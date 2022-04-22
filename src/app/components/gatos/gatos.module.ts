import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GatosComponent } from './gatos/gatos.component';
import { gatosRoutes } from './gatos.routing';
import { RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { DirectivesModule } from 'src/app/core/directives/directives.module';
import { MatIconModule } from '@angular/material/icon';
import { CreateCatComponent } from './create-cat/create-cat.component';
import { FormularioGatoComponent } from './formulario-gato/formulario-gato.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FavoritesComponent } from './favorites/favorites.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
@NgModule({
  declarations: [
    GatosComponent,
    CardComponent,
    CreateCatComponent,
    FormularioGatoComponent,
    FavoritesComponent,
  ],
  imports: [
    RouterModule.forChild(gatosRoutes),
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    DirectivesModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    ScrollingModule

  ],
})
export class GatosModule {}
