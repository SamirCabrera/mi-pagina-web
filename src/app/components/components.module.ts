import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule} from '../angular-material/angular-material.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { InputEmailComponent } from './inputs/input-email/input-email.component';
import { InputPasswordComponent } from './inputs/input-password/input-password.component';
import { InputUserComponent } from './inputs/input-user/input-user.component';
import { Slider3dComponent } from './slider3d/slider3d.component';
import { SliderComponent } from './slider3d/slider/slider.component';


@NgModule({
  declarations: [InputEmailComponent, 
    InputPasswordComponent, 
    InputUserComponent, 
    Slider3dComponent,
    SliderComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule
  ],
  exports: [InputEmailComponent, 
      InputPasswordComponent, 
      InputUserComponent, 
      Slider3dComponent,
      SliderComponent]
})
export class ComponentsModule { }
