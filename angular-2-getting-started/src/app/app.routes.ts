import { provideRouter, RouterConfig } from '@angular/router';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductListComponent } from './products/product-list.component';
import { ProductDetailComponent } from './products/product-detail.component';

const routes: RouterConfig = [
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'products',
    component: ProductListComponent,
  },
  {
    path: 'products/:id',
    component: ProductDetailComponent
  },
  {
    path: '**',
    redirectTo: 'welcome'
  }
];

export const appRouterProviders = [
  provideRouter(routes, { 
    enableTracing: false
  })
];