import { Component, OnInit, OnChanges, Input } from '@angular/core';


@Component({
  selector: 'status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.sass'],
})
export class StatusBar implements OnChanges {
  @Input() menu_items;
  @Input() menu_disabled;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(value){
    // console.log('ngOnChange value = ',value);
  }

}
