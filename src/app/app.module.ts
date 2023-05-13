import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SknFaInputComponent } from './lib/skn-fa-input/skn-fa-input.component';

@NgModule({
  declarations: [
    AppComponent,
    SknFaInputComponent
  ],
  imports: [
    BrowserModule,
    // FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
