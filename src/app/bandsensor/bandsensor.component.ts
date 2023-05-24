import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bandsensor',
  templateUrl: './bandsensor.component.html',
  styleUrls: ['./bandsensor.component.css']
})
export class BandsensorComponent  implements OnInit{

  boxColorL: string = '#FF0000';
  boxColorR: string = '#00FF00';
  ngOnInit(): void {
    this.clickButtonEverySecond("bandL");
    this.clickButtonEverySecond("bandR");
  }
  clickButtonEverySecond(buttonId: string): void {
    const button = document.getElementById(buttonId) as HTMLButtonElement;
    
    setInterval(() => {

      button.click();
    }, 1000);
  }
  changeBoxColor(isSensorActive: boolean): void {
    
    
  }
  randBR(){
    this.boxColorL = this.generateRandomColor();
  }
  randBL(){
    this.boxColorR = this.generateRandomColor();
  }
  generateRandomColor(): string {
    const colors = ["#FF0000", "#00FF00"]; // Rot und Grün als Hexadezimalwerte
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }
}
