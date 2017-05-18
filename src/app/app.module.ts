import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import 'rxjs/Rx';

import { appRoutes } from './app.routes';

import { SharedModule } from './shared/shared.module'
import { ProfileModule } from './profile/profile.module'
import { AuthService } from './shared/services/auth.service'

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.comnponent'
import { DashboardLayoutComponent } from 'app/shared/layout_components/dashboard_layout/dashboard_layout.component'

@NgModule({
  declarations: [
    AppComponent,
    DashboardLayoutComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ProfileModule,
    SharedModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
