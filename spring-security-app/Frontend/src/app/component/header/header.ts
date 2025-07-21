import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {Menu} from '../../service/menu';
import {Router, RouterModule} from '@angular/router';
import {UserAuth} from '../../service/user-auth';
import {CommonModule} from '@angular/common';
import {User} from '../../service/user';
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav';
import {MatList, MatListItem} from '@angular/material/list';


@Component({
  selector: 'app-header',
  imports: [
    MatToolbarModule,
    MatIconModule,
    RouterModule,
    CommonModule,
    MatList,
    MatListItem,
    MatSidenavModule

  ],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  @ViewChild('leftDrawer') leftDrawer!: MatSidenav;
  @ViewChild('rightDrawer') rightDrawer!: MatSidenav;

  constructor(
    private menu: Menu,
    private userAuth: UserAuth,
    private router: Router,
    public user: User
  ) {}

  toggleMenu() {
    if (this.leftDrawer) {
      this.leftDrawer.toggle();
    }
  }
  toggleRightMenu(){
    if (this.rightDrawer) {
      this.rightDrawer.toggle();
    }
  }
  public isLoggedIn() {
    return this.userAuth.isLoggedIn();
  }
  public logout() {
    this.userAuth.clear();
    this.router.navigate(['/home']);
  }
}
