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
import {HumidityChart} from 'app/gatewaystatistics/humidityChart/humiditychart.component';
import {LoginComponent} from "./login/login.component";
import {LoginService} from "./login/loginService";
import {MdInputModule} from '@angular/material';
import {HttpModule} from "@angular/http";
import {GatewaysGrid} from "./gatewaysgrid/gatewaysgrid.component";


const appRoutes: Routes = [
  { path: 'show-statistics', component: GatewayStatistics }
];

@NgModule({
  declarations: [
    AppComponent,
    GatewayCardComponent,
    GatewayStatistics,
    TempChart,
    HumidityChart,
    LoginComponent,
    GatewaysGrid
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdCardModule,
    MdInputModule,
    MdGridListModule,
    RouterModule.forRoot(appRoutes),
    ChartsModule,
    HttpModule
  ],
  providers: [GatewayService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private gatewayService: GatewayService) {
    this.gatewayService.selectedGateway = new BehaviorSubject(null);
  }

}
