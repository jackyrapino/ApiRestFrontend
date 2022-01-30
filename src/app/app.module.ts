import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AltaComponent } from './pages/alta/alta.component';
import { ListadoComponent } from './pages/listado/listado.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AltaComponent,
    ListadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
