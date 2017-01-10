import { Component, OnInit, ElementRef  } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-any-page',
  template: require('./any-page.component.html'),
  styleUrls: ['./any-page.component.css']
})
export class AnyPageComponent implements OnInit {

  data: any;
  el: ElementRef;

  constructor(
    private route: ActivatedRoute,
    el: ElementRef
  ) {
    this.data = this.route.snapshot.data;
    this.el = el;
  }

  ngOnInit() {
    console.log('ngOnInit',this.el,this.route.snapshot.data)
  }

}
