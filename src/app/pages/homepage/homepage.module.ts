import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { AngularMaterialModule } from '../../angular-material/angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ComponentsModule } from '../../components/components.module';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [HomepageComponent, LoginComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FlexLayoutModule,
    ComponentsModule
  ]
})
export class HomepageModule { }
