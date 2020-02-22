import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule} from '../angular-material/angular-material.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { InputEmailComponent } from './inputs/input-email/input-email.component';
import { InputPasswordComponent } from './inputs/input-password/input-password.component';



@NgModule({
  declarations: [InputEmailComponent, InputPasswordComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule
  ],
  exports: [InputEmailComponent, InputPasswordComponent]
})
export class ComponentsModule { }
