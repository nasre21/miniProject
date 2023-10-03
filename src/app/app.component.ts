import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mini Calculator';

  numero1!:string;
  numero2!:string;
  resultado!:number;


  sumar():void{
    // this.resultado = this.numero1 + this.numero2;

    this.resultado = parseInt (this.numero1) + parseInt(this.numero2);


  }

 resta():void{
    // this.resultado = this.numero1 - this.numero2;

    this.resultado = parseInt(this.numero1) - parseInt(this.numero2);


  }
}
