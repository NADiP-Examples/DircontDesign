import { Component, OnInit, ViewChild } from '@angular/core';
import { close } from "fs";

type user_data_status_type = "closed" | "opened" | "saved" | "saved_animate";

@Component({
  // selector: 'app-profile-demo',
  templateUrl: './profile-demo.component.html',
  styleUrls: ['./profile-demo.component.sass']
})
export class ProfileDemoComponent implements OnInit {
  user_data_status:user_data_status_type = "closed";
  constructor() { }

  ngOnInit() {
  }

  onKeyUp(event){
    if (event.keyCode === 32){
      event.target.nextElementSibling?event.target.nextElementSibling.focus(): '';
    }
  }

  animationEnd(){
    console.log('transitionEnd');
    if (this.user_data_status == "saved_animate") this.user_data_status = "saved";
  }

  saveUserData(form){
    this.user_data_status = "saved_animate";
  }

  reset(){
    this.user_data_status = "closed";
  }

}
