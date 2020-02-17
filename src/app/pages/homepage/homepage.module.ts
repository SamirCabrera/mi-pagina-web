import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { AngularMaterialModule } from '../../angular-material/angular-material.module';


@NgModule({
  declarations: [HomepageComponent],
  imports: [
    CommonModule,
    AngularMaterialModule
  ]
})
export class HomepageModule { }
