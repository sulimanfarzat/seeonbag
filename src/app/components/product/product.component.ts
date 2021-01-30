import { Component, ElementRef, OnInit } from '@angular/core';
import { Color } from './pruduct.enum';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

// class Bag {
//   name: string ='';
//   color: Color = Color.Green;

//   constructor(name:string,color:Color) {
//     this.name=name;
//     this.color=color;
//   }
// }

export class ProductComponent implements OnInit {

  linkColor: string = '' ;
  blue: Color = Color.Blue;
  gray: Color = Color.Gray;
  green: Color = Color.Green;
  yellow: Color = Color.Yellow;
  red: Color = Color.Red;


  constructor(private el: ElementRef) { }

  ngOnInit(): void {
  }

  setColor(newColor: string = '#0BBDB1'): void {
    console.log('value', newColor);
    this.linkColor = newColor;
    (this.el.nativeElement as HTMLElement).style.setProperty('--bag-color', newColor);
  }

  getColor () {
    return console.log(this.linkColor);
  }




}
