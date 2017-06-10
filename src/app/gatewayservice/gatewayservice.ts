/**
 * Created by gjoosen on 10/06/2017.
 */


import {Injectable} from '@angular/core';
import {GatewayModel} from '../gatewaymodel/gatewaymodel';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class GatewayService {
  selectedGateway: BehaviorSubject<GatewayModel>;
}
