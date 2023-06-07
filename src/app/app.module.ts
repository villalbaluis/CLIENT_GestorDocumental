import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { LoginComponent } from './modules/auth/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './modules/profile/profile.component';
import { TareasModule } from './modules/tareas/tareas.module';
import { AreasModule } from './modules/areas/areas.module';
import { ObjetivosModule } from './modules/objetivos/objetivos.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    TareasModule,
    AreasModule,
    ObjetivosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
