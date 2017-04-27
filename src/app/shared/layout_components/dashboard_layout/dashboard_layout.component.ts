import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'app/shared/services/auth.service';

import { TOP_MENU_ITEMS, LEFT_MENU_ITEMS } from './menu-tems';
import { ROLES } from 'app/CONSTANTS';

@Component({
  // selector: 'dashboard_layout',
  templateUrl: './dashboard_layout.component.html',
  styleUrls: ['./dashboard_layout.component.sass']
})
export class DashboardLayoutComponent {
  top_menu_items = TOP_MENU_ITEMS.unknown;
  left_menu_items = LEFT_MENU_ITEMS.unknown;
  ROLES = ROLES;
  disabled = false;
  user = {};

  constructor(private router: Router,
              private authService: AuthService,
              ) {

    // this.personalDataService.getSelf()
    //   .subscribe(user => {
    //     // console.log('user.type = ', user['type']);
    //     this.user = user;
    //     this.top_menu_items = TOP_MENU_ITEMS[user['type']];
    //     this.left_menu_items = LEFT_MENU_ITEMS[user['type']];
    //     this.disabled = !user['personal_id'];
    //   })
  }
}
