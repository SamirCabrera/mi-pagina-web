import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NguCarouselModule } from '@ngu/carousel';
import { AngularMaterialModule } from '../../angular-material/angular-material.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    NguCarouselModule
  ]
})
export class HomeModule { }
