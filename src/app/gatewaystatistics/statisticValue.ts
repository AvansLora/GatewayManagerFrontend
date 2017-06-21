import {NgModel} from "@angular/forms";
/**
 * Created by gjoosen on 21/06/2017.
 */


export class StatisticValue {
  caseTemp: number;
  humidity: number;
  dateTime: string;


  constructor(caseTemp: number, humidity: number, date: string){
    this.caseTemp = caseTemp;
    this.humidity = humidity;
    this.dateTime = date;
  }

}
