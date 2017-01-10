import {NgModule, Compiler, Injectable} from '@angular/core';
import {HttpModule, Http} from '@angular/http';
import {RouterModule, Routes, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

import {AppComponent} from './app.component';
import {MainMenuComponent} from './main-menu/main-menu.component';

import {Page0Component as RootPageComponent} from './page0/page0.component';
import {Page1Component} from './page1/page1.component';
import {Page2Component} from './page2/page2.component';
import {Page3Component} from './page3/page3.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {BodyComponent} from './body/body.component';
import {AnyPageComponent} from './any-page/any-page.component';
import { BodyInnerComponent } from './body/body-inner/body-inner.component';


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
  {
    path: ':path',
    component: AnyPageComponent,
    resolve: {
      item: ItemResolver
    }
  },
  {path: '**',component: NotFoundComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    RootPageComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    MainMenuComponent,
    NotFoundComponent,
    BodyComponent,
    AnyPageComponent,
    BodyInnerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    Compiler,
    ItemResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
