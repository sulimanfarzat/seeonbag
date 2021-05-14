import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {

  testimonialsCarousel: OwlOptions = {
    rtl:  true,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    navSpeed: 700,
    dots: true,
    items: 1,
    margin: 30,
    autoplay: true,
    smartSpeed: 700,
    autoHeight: true,
    autoWidth: true,
    center: true,
    autoplayTimeout: 3000,
    animateIn: 'animate__backInRight',
    //animateOut: 'animate__backOutDown',
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1,
        margin: 0
      },
      460: {
        items: 1,
        margin: 0
      },
      576: {
        items: 1,
        margin: 20
      },
      992: {
        items: 1,
        margin: 30
      }
    },
    nav: false
  };


  constructor() { }

  ngOnInit(): void {
  }

}
