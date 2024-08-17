import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 public title:string = 'Hola mundo!';
 public counter:number = 10;
 increseby():void{
  this.counter +=1;
 }
 decreseby():void{
  this.counter -=1;
 }
}
