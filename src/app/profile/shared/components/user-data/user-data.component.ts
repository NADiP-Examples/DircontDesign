import {
  Component,
  OnInit,
  OnChanges,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  style,
  state,
  animate,
  transition,
  trigger
} from '@angular/core';

@Component({
  selector: 'user-data',
  templateUrl: './user-data.component.html',
  // providers: [ ApplicationService]
  styleUrls: ['./user-data.component.sass'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({ opacity: 0 }),
        animate(1000, style({ opacity: 1 }))
      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        animate(500, style({ opacity: 0 }))
      ])
    ])
  ]

})
export class UserDataComponent implements OnInit, OnChanges {

  // @ViewChild('second_name')
  // input_second_name;

  // Set Focus to input #second_name
  @ViewChild('second_name') set _(input_second_name) {
    if (input_second_name) input_second_name.nativeElement.focus();
  }

  @Input() user_data: Object;
  @Input() isFilled;
  @Output() isFilledChange:EventEmitter<boolean> = new EventEmitter<boolean>();

  open: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(value) {
    if (this.user_data['second_name']) this.open = true;
  }

  onSelect() {
    console.log(this.user_data);
    this.open = true;
  }

  next(){
    console.log('Next');
    this.isFilled = true;
    this.isFilledChange.emit(this.isFilled);
  }

  addPhone() {
    this.user_data['phones'].push('');
  }

  removePhone(index) {
    this.user_data['phones'].splice(index, 1);
  }

  customTrackBy(index: number, obj: any): any {
    return index;
  }

}
