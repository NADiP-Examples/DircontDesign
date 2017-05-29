import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { Angular2FontAwesomeModule } from 'angular2-font-awesome/angular2-font-awesome'

import { LeftMenuComponent } from './components/left-menu/left-menu.component'
import { StatusBar } from './components/status-bar/status-bar.component'


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
    StatusBar,
    TitleFromPipe
  ],
  exports: [
    LeftMenuComponent,
    StatusBar,
    TitleFromPipe
  ]
})
export class SharedModule { }
