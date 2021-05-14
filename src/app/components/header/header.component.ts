import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LangService } from 'src/app/core/services/lang.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isMenuCollapsed = true;
  public scrolled = false;

  @ViewChild('headerMenu') public menuElement!: ElementRef<HTMLInputElement>;
  elementPosition: any;

  fragment: string = '';

  constructor(private router: Router, public route: ActivatedRoute, public lang: LangService) {

   }

  ngOnInit(): void {
    this.route.fragment.subscribe(fragment => {
      console.log(`ActivatedRoute.fragment: ${fragment} (typeof: ${typeof fragment})`);
      console.log(`window.location.hash: ${window.location.hash}`);
      this.fragment = fragment;
    });
  }

  ngAfterViewInit(): void{
    this.elementPosition = this.menuElement.nativeElement.clientHeight;
  }

  @HostListener('window:scroll', ['$event'])
  handleScroll(){
    const windowScroll = window.pageYOffset;
    if(windowScroll >= this.elementPosition){
      this.scrolled = true;
    } else {
      this.scrolled = false;
    }
  }

  switchLang($event: any){
    this.lang.switchLangService($event);
    let owlCarouselRTL;
    owlCarouselRTL = this.lang.selectLang === 'ar' ? true : false;
    this.lang.setValue(owlCarouselRTL);
    console.log( this.lang.selectLang)
  }



// public goToItems(): void {
//   this.router.navigate(['about'], { relativeTo: this.route });
//   console.log(this.route);
// }




}


