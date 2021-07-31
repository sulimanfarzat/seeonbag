import { Component, ElementRef, OnInit } from '@angular/core';
import { Color } from './pruduct.enum';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})


export class ProductComponent implements OnInit {

  linkColor: string = '' ;
  blue: Color = Color.Blue;
  gray: Color = Color.Gray;
  orange: Color = Color.Orange;
  darkgray : Color = Color.Darkgray ;
  red: Color = Color.Red;
  pink: Color = Color.Pink;


  constructor(private el: ElementRef) { }

  ngOnInit(): void {
  }

  setColor(newColor: string = '#252525'): void {
    // console.log('value', newColor);
    this.linkColor = newColor;
    (this.el.nativeElement as HTMLElement).style.setProperty('--bag-color', newColor);
  }

  getColor () {
    // console.log(this.linkColor)
    return this.linkColor;
  }




}
