import { Component } from '@angular/core';
import {GatewayModel} from './gatewaymodel/gatewaymodel';
import {LoginService} from './login/loginService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


    constructor(private loginService: LoginService){

    }
}
