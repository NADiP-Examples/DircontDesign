import { Routes } from '@angular/router';

// Other routes
import { authRoutes } from './auth/auth.routes';
import { profileRoutes } from './profile/profile.routers';

// Layout components - компоненты обертки (компоненты, в которы встраиваются текущие компоненты)
import { DashboardLayoutComponent } from './shared/layout_components/dashboard_layout/dashboard_layout.component';

// Other components
import { NotFoundComponent } from './not-found/not-found.comnponent';

// Guards
// import { isLoggedIn } from './shared/services/guard.service';
// import { isHasId } from 'app/shared/services/guard.service';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/profile', pathMatch: 'full' },
  { path: '', children: authRoutes }, // auth
  {
    path: '',  component: DashboardLayoutComponent, children: [
    { path: 'profile', children: profileRoutes },
    //  any routes with CommonComponent
  ]
  },
  { path: '**', component: NotFoundComponent }
];
