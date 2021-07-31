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
  currentPlayingVideo!: HTMLVideoElement;

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
    }

  ngOnInit(): void {

  }


  onNavChange(changeEvent: NgbNavChangeEvent) {
    console.log(changeEvent.preventDefault ,'nxt:' + changeEvent.nextId, changeEvent.activeId);
    if (changeEvent.nextId < changeEvent.activeId ) {
    }
  }

  onPlayingVideo(event:  any) {
    event.preventDefault();
    // play the first video that is chosen by the user
    if (this.currentPlayingVideo === undefined) {
        this.currentPlayingVideo = event.target;
        this.currentPlayingVideo.play();
    } else {
    // if the user plays a new video, pause the last one and play the new one
        if (event.target !== this.currentPlayingVideo) {
            this.currentPlayingVideo.pause();
            this.currentPlayingVideo = event.target;
            this.currentPlayingVideo.play();
        }
    }
}





}
