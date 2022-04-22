import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GatosComponent } from './gatos/gatos.component';
import { gatosRoutes } from './gatos.routing';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [GatosComponent],
  imports: [RouterModule.forChild(gatosRoutes), CommonModule],
})
export class GatosModule {}
