import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule} from '../angular-material/angular-material.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { InputEmailComponent } from './inputs/input-email/input-email.component';
import { InputPasswordComponent } from './inputs/input-password/input-password.component';
import { InputUserComponent } from './inputs/input-user/input-user.component';



@NgModule({
  declarations: [InputEmailComponent, InputPasswordComponent, InputUserComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule
  ],
  exports: [InputEmailComponent, InputPasswordComponent, InputUserComponent]
})
export class ComponentsModule { }
