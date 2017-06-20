import { Component } from '@angular/core';
import {GatewayModel} from './gatewaymodel/gatewaymodel';
import {LoginService} from "./login/loginService";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  gateways = [
    new GatewayModel('gateway1', 'description1'),
    new GatewayModel('gateway2', 'description2'),
    new GatewayModel('gateway3', 'description3'),
    new GatewayModel('gateway4', 'description4'),
    new GatewayModel('gateway5', 'description5')];


    constructor(private loginService:LoginService){

    }
}
