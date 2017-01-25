import {NgModule, Compiler} from '@angular/core';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {MainMenuComponent} from './main-menu/main-menu.component';

import {Page0Component as RootPageComponent} from './page0/page0.component';
import {Page1Component} from './page1/page1.component';
import {Page2Component} from './page2/page2.component';
import {Page3Component} from './page3/page3.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {BodyComponent} from './body/body.component';

import {appRoutes, ItemResolver} from './app.router';

@NgModule({
  declarations: [
    AppComponent,
    RootPageComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    MainMenuComponent,
    NotFoundComponent,
    BodyComponent
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
