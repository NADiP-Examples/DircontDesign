import { Component, OnInit } from '@angular/core';

import { AuthService } from 'app/shared/services/auth.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {

  user_data = {
    phones: ['']
  };
  company_data = {};
  status = {
    legal_status: '',
    residency: ''
  };

  status_selected: boolean = false;
  user_data_is_filled: boolean = false;
  company_data_is_filled: boolean = false;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  onChangeStatus(new_status) {
    console.log('Profile | Status change', new_status);
    this.status_selected = !!(this.status.legal_status && this.status.residency);
    // console.log(this.status_selected)
  }

  loadData() {
    this.authService.getSelf()
      .subscribe((user) => {
        this.user_data = user;
        this.authService.getUserCompany(user.id)
          .subscribe(
            (company) => {
              this.company_data = company;
            }
          );
        this.status = { legal_status: user['legal_status'], residency: user['residency'] };
        if (this.user_data['second_name']) this.user_data_is_filled = true;
        console.log('user = ', this.user_data);
      })

  }

  clearData() {
    this.status = { legal_status: '', residency: '' };
    this.user_data['second_name'] = '';
    this.user_data_is_filled = false;
  }

}
