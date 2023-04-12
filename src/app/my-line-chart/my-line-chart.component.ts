import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-my-line-chart',
  templateUrl: './my-line-chart.component.html',
  styleUrls: ['./my-line-chart.component.css']
})
export class MyLineChartComponent implements OnInit{
  chartData:Chart[]=[];
  json={
    sensors:
    [
    {
      sonsorName: 'Sensor1',
      data: [1,2,3,4,5,6]
    },
    {
      sonsorName: 'Sensor2',
      data: [1,2,3,4,5,6]
    },
    {
      sonsorName: 'Sensor3',
      data: [1,2,3,4,5,6]
    }
  ]}

  ngOnInit(): void {
    for(let data of this.json.sensors){
      let lineChart= new Chart({
        chart: {
          type: 'areaspline'
        },
        title: {
          text: data.sonsorName
        },
        credits: {
          enabled: false
        },
        series: [
          {
            name: 'Line 1',
            type: 'areaspline',
            data: data.data
          }
        ]
      })
    this.chartData.push(lineChart);
    }
  }
}
