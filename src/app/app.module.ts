import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './heroes/hero/hero.component';
import { ListaComponent } from './heroes/lista/lista.component';
import { counterModule } from './counter/counter.module';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    ListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    counterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
