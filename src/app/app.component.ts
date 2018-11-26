import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
	<app-customers></app-customers>
  `
  //templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor() {}

  ngOnInit() {
	
  }
}