import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { Angular2FontAwesomeModule } from 'angular2-font-awesome/angular2-font-awesome'

import { LeftMenuComponent } from './components/left-menu/left-menu.component'
import { TopMenuComponent } from './components/top-menu/top-menu.component'


import { TitleFromPipe } from 'app/shared/pipes/titleFrom'

@NgModule({
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule,
    Angular2FontAwesomeModule
  ],
  declarations: [
    LeftMenuComponent,
    TopMenuComponent,
    TitleFromPipe
  ],
  exports: [
    LeftMenuComponent,
    TopMenuComponent,
    TitleFromPipe
  ]
})
export class SharedModule { }
