import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
  numbers = [1, 2, 3, 4, 5];
  fruits = ["manzana", "banana", "naranja"];
  constructor(){}


  ngOnInit(): void {
    const doubleName = this.numbers.map((number)=> number*2)
    console.log(doubleName)

    this.fruits.forEach((frut) => {
      console.log(frut);
    });
  }

  mostrarResultados() {
    const numerosDuplicados = this.numbers.map((number) => number * 2);
    console.log('Números Duplicados:', numerosDuplicados);

    this.fruits.forEach((fruit) => {
      console.log('fruit:', fruit);
    });
  }

}
