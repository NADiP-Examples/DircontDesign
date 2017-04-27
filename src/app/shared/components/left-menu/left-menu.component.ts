import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.sass']
})
export class LeftMenuComponent implements OnInit {

  @Input() menu_items;
  @Input() menu_disabled;
  constructor() { }

  ngOnInit() {
  }

}
