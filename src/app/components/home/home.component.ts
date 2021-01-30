import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgbNavChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Container, EnterExitLeft, EnterExitRight  } from 'src/app/modules/animations/animations';

@Component({
  // selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [Container,EnterExitLeft, EnterExitRight ],
})
export class HomeComponent implements OnInit {

  active = 1;
  activeLeft: boolean = false;
  activeRight: boolean = false;
  isDisplayed = true;
  public isCollapsed = true;
  public isCollapsed2 = true;

  homeCarousel: OwlOptions = {
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
    autoplayTimeout: 10000,
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


  onNavChange(changeEvent: NgbNavChangeEvent) {
    console.log(changeEvent.preventDefault ,'nxt:' + changeEvent.nextId, changeEvent.activeId);
    if (changeEvent.nextId < changeEvent.activeId ) {
    }
  }


}


