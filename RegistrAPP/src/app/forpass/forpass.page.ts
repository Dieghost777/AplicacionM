import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-forpass',
  templateUrl: './forpass.page.html',
  styleUrls: ['./forpass.page.scss'],
})
export class ForpassPage implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }
  goBack() {
    this.location.back();
  }
}
