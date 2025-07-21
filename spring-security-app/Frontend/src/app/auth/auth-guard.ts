import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {UserAuth} from '../service/user-auth';
import {User} from '../service/user';

@Injectable({
  providedIn:'root'
})
export class AuthGuard implements CanActivate{
  constructor(
    private userAuth: UserAuth,
    private router: Router,
    private user:User
  ) {}

  canActivate(
    route : ActivatedRouteSnapshot,
    state : RouterStateSnapshot):Observable<boolean | UrlTree> | Promise<boolean|UrlTree>  | boolean| UrlTree{
    if(this.userAuth.getToken() != null){
      const role:[string]= route.data["roles"] ;
      if(role){
        const match = this.user.roleEqual(role);
        if(match) {
          return true;
        }else{
          this.router.navigate(['/forbidden'])
          return false;
        }
      }
    }
    this.router.navigate(['/login'])
    return false;
}
}
