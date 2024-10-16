import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent], //TODO: components, directives, and pipes
  imports: [BrowserModule, AppRoutingModule], //TODO: only modules
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
