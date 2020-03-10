import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriasComponent } from './categorias.component';
import { ComponentsModule } from '../../components/components.module';


@NgModule({
  declarations: [CategoriasComponent],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class CategoriasModule { }
