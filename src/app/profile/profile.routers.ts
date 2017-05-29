import { Routes } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { ProfileDemoComponent } from './profile-demo/profile-demo.component'

export const profileRoutes: Routes = [
  { path: '', component: ProfileComponent },
  { path: 'demo', component: ProfileDemoComponent },
  { path: 'demo/one', component: ProfileDemoComponent },
  { path: 'demo/two', component: ProfileDemoComponent },
  { path: 'demo/three', component: ProfileDemoComponent },
];
