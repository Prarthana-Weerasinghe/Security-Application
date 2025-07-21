import { Routes } from '@angular/router';
import {Cars} from './component/cars/cars';
import {Home} from './component/home/home';
import {User} from './component/user/user';
import {Login} from './component/login/login';
import {Forbidden} from './component/forbidden/forbidden';
import {Admin} from './component/admin/admin';
import {AuthGuard} from './auth/auth-guard';
import {Signup} from './component/signup/signup';


export const routes: Routes = [
  { path: '',component:Signup},
  { path: 'cars', component: Cars },
  { path: 'home', component: Home },
  { path: 'admin', component: Admin, canActivate: [AuthGuard], data:{roles:['Admin']}},
  { path: 'user', component: User,canActivate: [AuthGuard], data:{roles:['User']}},
  { path: 'login', component: Login },
  { path: 'forbidden', component: Forbidden }

];

