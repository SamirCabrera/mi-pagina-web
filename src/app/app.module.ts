import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from './angular-material/angular-material.module'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Componentes
import { HomeComponent } from './pages/home/home.component';
import { HomepageComponent } from './pages/homepage/homepage.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent, 
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
