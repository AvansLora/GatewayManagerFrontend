/**
 * Created by gjoosen on 10/06/2017.
 */


import {Component, OnInit} from '@angular/core';
import {LineChart} from '../lineChart';
import {StatisticValue} from '../statisticValue';
import {GatewayService} from '../../gatewayservice/gatewayservice';

@Component({
  selector: 'app-humiditychart',
  templateUrl: 'humiditychart.component.html'
})

export class HumidityChart {
  humidityChart: RawValuesLineChart;
  constructor(private gatewayService: GatewayService) {
    gatewayService.getAllMeasurements().subscribe(res => {

      this.humidityChart = new RawValuesLineChart('rgba(153, 210, 246,0.2)', 'rgba(153, 210, 246,1)');
      this.humidityChart.lineChartLabels = [];
      this.humidityChart.lineChartData = [
        {label: 'humidity', data: []}
      ];

      for (let i = 0; i < res.length; i++) {
        const caseTemp = res[i]['CaseTemp'];
        const humidity = res[i]['Humidity'];
        const dateTime = res[i]['DateTime'];

        const obj = new StatisticValue(caseTemp, humidity, dateTime);

        console.log('casetemp: ' + caseTemp);
        console.log('date: ' + dateTime);

        this.humidityChart.lineChartData[0].data.push(humidity);
        this.humidityChart.lineChartLabels.push(dateTime);
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
