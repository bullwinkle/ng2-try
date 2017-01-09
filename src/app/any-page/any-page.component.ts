import { Component, OnInit,  } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-any-page',
  templateUrl: './any-page.component.html',
  styleUrls: ['./any-page.component.css']
})
export class AnyPageComponent implements OnInit {

  data: any;

  constructor(private route: ActivatedRoute) {
    this.data = this.route.snapshot.data;
  }

  ngOnInit() {
    console.log('ngOnInit',this.route.snapshot.data)
  }

}
