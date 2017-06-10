/**
 * Created by gjoosen on 10/06/2017.
 */


import {Component, OnInit} from '@angular/core';
import {GatewayModel} from '../gatewaymodel/gatewaymodel';
import {GatewayService} from '../gatewayservice/gatewayservice';

@Component({
  selector: 'app-gatewaystatistics',
  templateUrl: 'gatewaystatistics.component.html'
})

export class GatewayStatistics implements OnInit{

  gateway: GatewayModel;

  constructor(private gatewayService: GatewayService){

  }

  ngOnInit(): void {
    this.gatewayService.selectedGateway.subscribe(value => {
      this.gateway = value;
    });
  }
}
