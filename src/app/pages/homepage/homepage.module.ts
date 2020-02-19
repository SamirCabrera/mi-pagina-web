import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { AngularMaterialModule } from '../../angular-material/angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [HomepageComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FlexLayoutModule
  ]
})
export class HomepageModule { }
