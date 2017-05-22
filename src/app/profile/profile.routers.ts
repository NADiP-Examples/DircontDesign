import { Routes } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { ProfileDemoComponent } from './profile-demo/profile-demo.component'

export const profileRoutes: Routes = [
  { path: '', component: ProfileComponent },
  { path: 'demo', component: ProfileDemoComponent },
];
