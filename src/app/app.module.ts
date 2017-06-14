import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';
import {MdCardModule} from '@angular/material';
import {MdGridListModule} from '@angular/material';
import 'hammerjs';
import {GatewayCardComponent} from './gatewaycard/gatewaycard.component';
import { RouterModule, Routes } from '@angular/router';
import {GatewayStatistics} from 'app/gatewaystatistics/gatewaystatistics.component';
import {BehaviorSubject} from 'rxjs';
import {GatewayService} from 'app/gatewayservice/gatewayservice';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import {TempChart} from 'app/gatewaystatistics/tempChart/tempchart.component';


const appRoutes: Routes = [
  { path: 'show-statistics', component: GatewayStatistics }
];

@NgModule({
  declarations: [
    AppComponent,
    GatewayCardComponent,
    GatewayStatistics,
    TempChart
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdCardModule,
    MdGridListModule,
    RouterModule.forRoot(appRoutes),
    ChartsModule
  ],
  providers: [GatewayService],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private gatewayService: GatewayService) {
    this.gatewayService.selectedGateway = new BehaviorSubject(null);
  }

}
