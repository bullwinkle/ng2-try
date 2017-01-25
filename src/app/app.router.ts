import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {Page0Component as RootPageComponent} from './page0/page0.component';
import {Page1Component} from './page1/page1.component';
import {Page2Component} from './page2/page2.component';
import {Page3Component} from './page3/page3.component';
import {NotFoundComponent} from './not-found/not-found.component';

const appRoutes: Routes = [
  {
    path: '',
    component: RootPageComponent
  },
  {
    path: 'page-1',
    component: Page1Component
  },
  {
    path: 'page-2',
    component: Page2Component
  },
  {
    path: 'page-3',
    component: Page3Component
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule {}
