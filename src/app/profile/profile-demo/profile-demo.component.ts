import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  // selector: 'app-profile-demo',
  templateUrl: './profile-demo.component.html',
  styleUrls: ['./profile-demo.component.sass']
})
export class ProfileDemoComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  onKeyUp(event){
    if (event.keyCode === 32){
      event.target.nextElementSibling?event.target.nextElementSibling.focus(): '';
    }
  }

}
