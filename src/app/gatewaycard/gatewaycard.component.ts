import {Component, Input} from '@angular/core';
import {GatewayModel} from '../gatewaymodel/gatewaymodel';
import {GatewayService} from '../gatewayservice/gatewayservice';

@Component({
  selector: 'app-gateway-card',
  templateUrl: './gatewaycard.component.html',
  styleUrls: ['./gatewaycard.component.css']
})
export class GatewayCardComponent {

  @Input() gateway: GatewayModel;

  constructor(private gatewayService: GatewayService){

  }

  clicked(event) {
    this.gatewayService.selectedGateway.next(this.gateway);
  }
}
