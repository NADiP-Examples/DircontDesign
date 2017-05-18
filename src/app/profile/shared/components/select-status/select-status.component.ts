import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import  { LEGAL_STATUSES, RESIDENCES } from 'app/Data/CONSTANTS.data'

@Component({
  selector: 'select-status',
  templateUrl: 'select-status.component.html',
  styleUrls: ['select-status.component.sass']
})
export class SelectStatusComponent implements OnInit, OnChanges {
  @Input() status: Object;
  @Output() onChangeStatus = new EventEmitter();

  RESIDENCES = RESIDENCES;
  LEGAL_STATUSES = LEGAL_STATUSES.slice();

  constructor() {
  }

  ngOnChanges(value) {
    // if (value['loadComplete']) this.onLoadComplete()
    console.log('ngOnChanges!!!');
    this.onChangeStatus.emit(this.status);
  }

  // onLoadComplete(){
  //   // console.log('Load Complete');
  //   if (this.status['residency'] == 'other') this.tmp = this.tmp ? this.tmp : this.LEGAL_STATUSES.splice(1, 1);
  //   this.onChangeStatus.emit(this.status['residency']);
  // }

  ngOnInit() {
    // this.status = this.status ? this.status : {};
  }

  changeResidency() {
    // console.log('inside sect status changeResidency');
    this.onChangeStatus.emit(this.status);

    if (this.status['residency'] == 'other') {
      this.status['legal_status'] = 'natural_person';
      this.LEGAL_STATUSES.splice(1, 1);
    }
    else {
      this.LEGAL_STATUSES = LEGAL_STATUSES.slice();
    }
  }

  changeLegalStatus() {
    this.onChangeStatus.emit(this.status);
  }


}
