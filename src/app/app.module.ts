import { BrowserModule, Title } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

// Awesome
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

// ngx-gallery
import { GalleryModule } from  'ng-gallery';
import { LightboxModule } from  'ng-gallery/lightbox';
import { LIGHTBOX_CONFIG } from 'ng-gallery/lightbox';

import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

// components
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LangService } from './core/services/lang.service';
import { ProductComponent } from './components/product/product.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';

const configGal = {
  loop: true,
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    ProductComponent,
    TestimonialsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule,
    FontAwesomeModule,
    CarouselModule,
    NgSelectModule,
    FormsModule,
    GalleryModule.withConfig(configGal),
    LightboxModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    }),
  ],
  exports: [TranslateModule],
  providers: [Title, HttpClient, HttpClientModule, LangService,
              {
                provide: LIGHTBOX_CONFIG,
                useValue: {
                  keyboardShortcuts: true
                }
              }
            ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})


export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far, fab);
  }
}

// AOT compilation support
export function httpTranslateLoader(http: HttpClient):any {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
