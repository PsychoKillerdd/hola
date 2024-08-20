import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h1>Hola counter</h1>
  <h3>Counter:{{ counter }}</h3>
  <button (click)="increseby(+1)">+1</button>
  <button (click)="reset()">Reset</button>
  <button (click)="increseby(-1)">-1</button>
  <hr>
  
   `
})
export class CounterComponent  {
  public counter:number = 10;
  increseby(value:number):void{
  this.counter +=value;
 }
 reset(){
  this.counter = 10;
 }
}
