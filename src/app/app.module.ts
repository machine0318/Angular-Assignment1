import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { successComp } from './success/success.component';
import { warningComp } from './warning/warning.component';

@NgModule({
  declarations: [
    AppComponent,
    successComp,
    warningComp
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
