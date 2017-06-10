import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';
import {MdCardModule} from '@angular/material';
import {MdGridListModule} from '@angular/material';
import 'hammerjs';
import {GatewayCardComponent} from './gatewaycard/gatewaycard.component';

@NgModule({
  declarations: [
    AppComponent,
    GatewayCardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdCardModule,
    MdGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
