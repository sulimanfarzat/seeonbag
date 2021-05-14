import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LangService {

  public selectLang: string;
  private owlCarouselRTL: BehaviorSubject<boolean>;

  constructor(public translate: TranslateService,
    @Inject(DOCUMENT) private document: Document) {

    translate.addLangs(['en', 'de', 'ar']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|de|ar/) ? browserLang : 'en');
    this.selectLang = (browserLang.match(/en|de|ar/) ? browserLang : 'en');

    this.owlCarouselRTL = new BehaviorSubject<boolean>(false);
  }

  // cchange owlCarouselRTL
  getValue(): Observable<boolean> {
    return this.owlCarouselRTL.asObservable();
  }
  setValue(newValue: boolean): void {
    this.owlCarouselRTL.next(newValue);
  }


  // change css file
  changeLangage(lang: string) {
    let htmlTag = this.document.getElementsByTagName('html')[0] as HTMLHtmlElement;
    htmlTag.dir = lang === 'ar' ? 'rtl' : 'ltr';
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
    this.changeCssFile(lang);
  }

  changeCssFile(lang: string) {
    let headTag = this.document.getElementsByTagName("head")[0] as HTMLHeadElement;
    let existingLink = this.document.getElementById("langCss") as HTMLLinkElement;
    let bundleName = lang === "ar" ? "arabicStyle.css" : "englishStyle.css";
    if (existingLink) {
       existingLink.href = bundleName;
    } else {
       let newLink = this.document.createElement("link");
       newLink.rel = "stylesheet";
       newLink.type = "text/css";
       newLink.id = "langCss";
       newLink.href = bundleName;
       headTag.appendChild(newLink);
    }
  }

  // if language changed from html
  public switchLangService(lang: string): void {
    //this.translate.use(lang);
    this.changeLangage(lang);
  }


}
