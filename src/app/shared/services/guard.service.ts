// import { Injectable } from '@angular/core';
// import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
// import { Observable } from "rxjs/Rx";
// import { AuthService } from './auth.service';
// import { PersonalDataService } from './personal-data.service';
//
// @Injectable()
// export class isLoggedIn implements CanActivate {
//
//   constructor (private router: Router, private AuthService: AuthService) {}
//
//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | boolean {
//     if (!this.AuthService.isLoggedIn()) {
//       this.router.navigate(['signin']);
//       return false;
//     }
//     return true;
//   }
// }
//
// @Injectable()
// export class isLoggedOut implements CanActivate {
//
//   constructor (private router: Router, private AuthService: AuthService) {}
//
//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | boolean {
//     if (this.AuthService.isLoggedIn()) {
//       this.router.navigate(['personal_data']);
//       return false;
//     }
//     return true;
//   }
// }
//
// @Injectable()
// export  class isHasId implements CanActivate {
//   constructor (private router: Router, private personalDataService: PersonalDataService) {}
//
//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | boolean {
//     return this.personalDataService.getSelf().map(user => {
//       if (user['personal_id']) {
//         return true
//       }
//       this.router.navigate(['personal_data', 'edit']);
//       return false;
//     });
//   }
// }
