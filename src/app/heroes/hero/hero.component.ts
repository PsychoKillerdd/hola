import { Component, input } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
 public name:string = "iron man";
 public age:number = 45;
 get capitalizedName():string{
  return this.name.toUpperCase()
 }
 getheroDescription():string{
  return `${this.name } - ${this.age}`;
 }
 get changeHero():string {
  return this.name = 'hola';
 }
 get changeAge():number{
  return this.age = 20;
 }
 resetForm():void{
  this.name = "iron man";
  this.age = 45;
 }
}

