import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { inicioRoutes } from './inicio.routing';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [InicioComponent],
  imports: [RouterModule.forChild(inicioRoutes), CommonModule],
})
export class InicioModule {}
