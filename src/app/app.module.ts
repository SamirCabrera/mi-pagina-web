import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from './angular-material/angular-material.module'
import { FlexLayoutModule } from '@angular/flex-layout';
import { ComponentsModule } from './components/components.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Componentes
import { HomeComponent } from './pages/home/home.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginComponent } from './pages/homepage/login/login.component';
import { RegisterComponent } from './pages/homepage/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent, 
    HomepageComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    RouterModule,
    FlexLayoutModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
