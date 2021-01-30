import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { HomeComponent } from 'src/app/components/home/home.component';
import { AboutComponent } from '../components/about/about.component';
import { ContactComponent } from '../components/contact/contact.component';
import { ProductComponent } from '../components/product/product.component';


const routerOptions: ExtraOptions =  {
  useHash: true,
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
  onSameUrlNavigation: 'reload',
  relativeLinkResolution: 'legacy'
};

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  // { path: 'about', component: AboutComponent },
  // { path: 'product', component: ProductComponent },
  // { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'},

  // { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
