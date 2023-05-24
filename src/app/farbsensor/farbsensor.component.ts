import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-farbsensor',
  templateUrl: './farbsensor.component.html',
  styleUrls: ['./farbsensor.component.css']
})
export class FarbsensorComponent implements OnInit{
  ngOnInit(): void {
    this.clickButtonEverySecond("rand");
  }

  boxColor: string = '#ff0000'; // Set the initial color of the box to red
  randCol(){
    this.boxColor = this.getRandomColor();
  }

  clickButtonEverySecond(buttonId: string): void {
    const button = document.getElementById(buttonId) as HTMLButtonElement;
    
    setInterval(() => {
      button.click();
    }, 10000);
  }
  callMethodEverySecond(randCol: () => void): void {
    setInterval(randCol, 1000);
  }
  
  getRandomColor(): string {
    const letters = "0123456789ABCDEF";
    let color = "#";
    
    for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    
    return color;
    }

}
