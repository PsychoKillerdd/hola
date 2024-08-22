import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {
 public heroNames:string[] = ['Spider Man','Hulk','Thor','iron man'];
 public deleteHero?:string;


removeLastHero():void{
   this.deleteHero = this.heroNames.pop();

}

}
