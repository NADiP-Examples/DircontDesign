import { Component, OnInit, ViewChild } from '@angular/core';
// import { NgModel, NgForm } from '@angular/forms';
import { close } from "fs";

type states = 'closed' | "opened" | "saved" | "saved_animate";

// TODO: оследовательную анимация

@Component({
  // selector: 'app-profile-demo',
  templateUrl: './profile-demo.component.html',
  styleUrls: ['./profile-demo.component.sass']
})
export class ProfileDemoComponent implements OnInit {

  // @ViewChild('second_name') set _(input_second_name) {
  //   if (input_second_name) input_second_name.nativeElement.focus();
  // }

  user_data_status: states = "closed";
  company_data_status: states = "closed";
  company_visible: boolean = false;
  legal_status = '';

  user: Object = {};
  company: Object = {};

  constructor() {
  }

  ngOnInit() {
  }

  onKeyUp(event) {
    if (event.keyCode === 32) {
      event.target.nextElementSibling ? event.target.nextElementSibling.focus() : '';
    }
  }

  animationEnd() {
    console.log('transitionEnd');
    if (this.user_data_status == "saved_animate") {
      this.user_data_status = "saved";
      this.company_visible = true;
    } else if (this.company_data_status == "saved_animate") {
      this.company_data_status = "saved"
    }
  }

  userDataEdit() {
    this.user_data_status = 'opened';
  }

  saveUserData(form) {
    if (form.valid) {
      console.log("Form is valid");
      this.user_data_status = "saved_animate";
      return
    }
    for (let control_key in form.controls) {
      let control = form.controls[control_key];
      control.markAsTouched()
    }
  }

  selectLegalStatus(legal_status) {
    console.log("ls change");
    this.legal_status = legal_status;
    this.company_data_status = 'opened';
  }

  companyDataEdit() {
    this.company_data_status = 'opened';
  }

  saveCompanyData(form) {
    console.log("form controls =", form.controls);
    if (form.valid) {
      console.log("Form is valid");
      this.company_data_status = "saved_animate";
      return
    }
    for (let control_key in form.controls) {
      let control = form.controls[control_key];
      control.markAsTouched()
    }
  }

  reset() {
    this.user_data_status = "closed";
    this.company_data_status = "closed";
    this.company_visible = false;
  }

}
