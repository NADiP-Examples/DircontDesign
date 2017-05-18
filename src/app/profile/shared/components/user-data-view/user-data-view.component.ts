import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'user-data-view',
  templateUrl: './user-data-view.component.html',
  styleUrls: ['./user-data-view.component.sass']
})
export class UserDataViewComponent implements OnInit {

  @Input() user_data: Object;

  constructor() { }

  ngOnInit() {
  }

}
