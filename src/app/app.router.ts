import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Routes, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import 'rxjs/operator/map';

import {Page0Component as RootPageComponent} from './page0/page0.component';
import {Page1Component} from './page1/page1.component';
import {Page2Component} from './page2/page2.component';
import {Page3Component} from './page3/page3.component';
import {NotFoundComponent} from './not-found/not-found.component';

@Injectable()
export class ItemResolver implements Resolve<any> {

  http: Http;

  constructor(http: Http) {
    this.http = http;
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<any>|Promise<any>|any {

    console.warn('route,state', route, state)

    return this.http.get('/page.html')
      .map(res=>res.text())
  }
}

export const appRoutes: Routes = [
  {path: '',component: RootPageComponent},
  {path: 'page-1',component: Page1Component},
  {path: 'page-2',component: Page2Component},
  {path: 'page-3',component: Page3Component},
  {path: '**',component: NotFoundComponent},
];
