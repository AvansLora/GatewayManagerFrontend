import {Component, Input} from '@angular/core';
import {GatewayModel} from '../gatewaymodel/gatewaymodel';

@Component({
  selector: 'app-gateway-card',
  templateUrl: './gatewaycard.component.html',
  styleUrls: ['./gatewaycard.component.css']
})
export class GatewayCardComponent {

  @Input() gateway: GatewayModel;

}
