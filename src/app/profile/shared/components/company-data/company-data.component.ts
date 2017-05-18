import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'company-data',
  templateUrl: './company-data.component.html',
  styleUrls: ['./company-data.component.sass']
})
export class CompanyDataComponent implements OnInit {

  @Input() company_data:Object;

  constructor() { }

  ngOnInit() {
  }

}
