import {Component} from '@angular/core';
import {GatewayService} from '../gatewayservice/gatewayservice';
import {LoginService} from '../login/loginService';
import {GatewayModel} from '../gatewaymodel/gatewaymodel';

@Component({
  selector: 'app-gateway-grid',
  templateUrl: 'gatewaysgrid.component.html',
  styleUrls: ['gatewaysgrid.css']
})

export class GatewaysGrid{

  gateways = [
    ];

  constructor(private gatewayService: GatewayService) {
    const a = this.gatewayService.getGatewaysList().subscribe(res => {
      console.log('res');

      var gatewaysList = res['gateways'];

      for (var i = 0; i < gatewaysList.length; i++){
        let name = gatewaysList[i]['HardwareName'];
        let id = gatewaysList[i]['HardwareId'];

        this.gateways.push(new GatewayModel(name, id));
      }
    });
    console.log(a);
  }
}
