import { Component, OnInit } from '@angular/core';
import { NgbNavChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { Gallery, GalleryItem, GalleryModule, ImageItem } from 'ng-gallery';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { LangService } from 'src/app/core/services/lang.service';
import { Container, EnterExitLeft, EnterExitRight  } from 'src/app/modules/animations/animations';

@Component({
  // selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [Container,EnterExitLeft, EnterExitRight ],
})
export class HomeComponent implements OnInit {
  isSyncAnimated: boolean = false;
  tabs = [0, 1, 2, 3];
  active=0;
  activeLeft: boolean = false;
  activeRight: boolean = false;
  isDisplayed = true;
  public isCollapsed = true;
  public isCollapsed2 = true;
  owlCarouselRTL: boolean=false;


  images!: GalleryItem[];

  homeCarousel: OwlOptions = {
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


  constructor(public lang: LangService) {

    /*this.lang.getValue().subscribe((value) => {
       this.flag = value;
       console.log( this.flag)
     });*/

    }

  ngOnInit(): void {

    this.images = imageData.map(item => {
      return new ImageItem({
        src: item.srcUrl,
        thumb: item.previewUrl
      });
    });
    console.log(this.images)

  }


  onNavChange(changeEvent: NgbNavChangeEvent) {
    console.log(changeEvent.preventDefault ,'nxt:' + changeEvent.nextId, changeEvent.activeId);
    if (changeEvent.nextId < changeEvent.activeId ) {
    }
  }



}



  const imageData = [
    { srcUrl: './assets/img/Photosession/1.jpg', previewUrl: './assets/img/Photosession/1.jpg' },
    { srcUrl: './assets/img/Photosession/2.jpg', previewUrl: './assets/img/Photosession/2.jpg' },
    { srcUrl: './assets/img/Photosession/3.jpg', previewUrl: './assets/img/Photosession/3.jpg' },
    { srcUrl: './assets/img/Photosession/4.jpg', previewUrl: './assets/img/Photosession/4.jpg' },
    { srcUrl: './assets/img/Photosession/5.jpg', previewUrl: './assets/img/Photosession/5.jpg' },
    { srcUrl: './assets/img/Photosession/6.jpg', previewUrl: './assets/img/Photosession/6.jpg' },
    { srcUrl: './assets/img/Photosession/7.jpg', previewUrl: './assets/img/Photosession/7.jpg' },
    { srcUrl: './assets/img/Photosession/8.jpg', previewUrl: './assets/img/Photosession/8.jpg' },
    { srcUrl: './assets/img/Photosession/9.jpg', previewUrl: './assets/img/Photosession/9.jpg' },
    { srcUrl: './assets/img/Photosession/10.jpg', previewUrl: './assets/img/Photosession/10.jpg' },
    { srcUrl: './assets/img/Photosession/11.jpg', previewUrl: './assets/img/Photosession/11.jpg' },
    { srcUrl: './assets/img/Photosession/12.jpg', previewUrl: './assets/img/Photosession/12.jpg' },
    { srcUrl: './assets/img/Photosession/13.jpg', previewUrl: './assets/img/Photosession/13.jpg' },
    { srcUrl: './assets/img/Photosession/14.jpg', previewUrl: './assets/img/Photosession/14.jpg' },
    { srcUrl: './assets/img/Photosession/15.jpg', previewUrl: './assets/img/Photosession/15.jpg' },
    { srcUrl: './assets/img/Photosession/16.jpg', previewUrl: './assets/img/Photosession/16.jpg' },
    { srcUrl: './assets/img/Photosession/17.jpg', previewUrl: './assets/img/Photosession/17.jpg' },
    { srcUrl: './assets/img/Photosession/18.jpg', previewUrl: './assets/img/Photosession/18.jpg' },
    { srcUrl: './assets/img/Photosession/19.jpg', previewUrl: './assets/img/Photosession/19.jpg' },
    { srcUrl: './assets/img/Photosession/20.jpg', previewUrl: './assets/img/Photosession/20.jpg' },
    { srcUrl: './assets/img/Photosession/21.jpg', previewUrl: './assets/img/Photosession/21.jpg' },
    { srcUrl: './assets/img/Photosession/22.jpg', previewUrl: './assets/img/Photosession/22.jpg' },
    { srcUrl: './assets/img/Photosession/23.jpeg', previewUrl: './assets/img/Photosession/23.jpeg' },
  ];
