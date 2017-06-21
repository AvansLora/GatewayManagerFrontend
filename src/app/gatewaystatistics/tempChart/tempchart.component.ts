/**
 * Created by gjoosen on 10/06/2017.
 */


import {Component, OnInit} from '@angular/core';
import {GatewayService} from '../../gatewayservice/gatewayservice';
import {StatisticValue} from '../statisticValue';
import {LineChart} from '../lineChart'

@Component({
  selector: 'app-tempchart',
  templateUrl: 'tempchart.component.html'
})

export class TempChart {
  tempChart: RawValuesLineChart;
  constructor(private gatewayService: GatewayService) {
    gatewayService.getAllMeasurements().subscribe(res => {

      this.tempChart = new RawValuesLineChart('rgba(153, 210, 246,0.2)', 'rgba(153, 210, 246,1)');
      this.tempChart.lineChartLabels = [];
      this.tempChart.lineChartData = [
        {label: 'case temperature', data: []}
      ];

      for (let i = 0; i < res.length; i++) {
        const caseTemp = res[i]['CaseTemp'];
        const humidity = res[i]['Humidity'];
        const dateTime = res[i]['DateTime'];

        const obj = new StatisticValue(caseTemp, humidity, dateTime);

        console.log('casetemp: ' + caseTemp);
        console.log('date: ' + dateTime);

        this.tempChart.lineChartData[0].data.push(caseTemp);
        this.tempChart.lineChartLabels.push(dateTime);
      }
    });
  }
}

class RawValuesLineChart implements LineChart {
  lineChartData: Array<any>;
  lineChartLabels: Array<any>;
  lineChartOptions: any = {
    responsive: true
  };
  lineChartColors: Array<any> = [
    {
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }];
  lineChartLegend: any = true;
  lineChartType: any = 'line';

  constructor(backgroundColor: any, pointColor: any) {
    this.lineChartColors = [
      {
        backgroundColor: backgroundColor,
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: pointColor,
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)'
      }];
  }

  chartClicked(e: any): void {
  }

  chartHovered(e: any): void {
  }
}
