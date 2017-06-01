import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { SimpleNotificationsModule } from 'angular2-notifications';
import 'rxjs/Rx';

import { appRoutes } from './app.routes';

import { SharedModule } from './shared/shared.module'
import { ProfileModule } from './profile/profile.module'
import { AuthService } from './shared/services/auth.service'
import {GeteployeersService} from './shared/services/geteployeers.service'
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.comnponent'
import { DashboardLayoutComponent } from 'app/shared/layout_components/dashboard_layout/dashboard_layout.component'
import { TreeModule } from 'angular-tree-component';
import { FulltreeComponent } from './fulltree/fulltree.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardLayoutComponent,
    NotFoundComponent,
    FulltreeComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ProfileModule,
    SharedModule,
    SimpleNotificationsModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    TreeModule,
  ],
  providers: [
    AuthService,
    GeteployeersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
