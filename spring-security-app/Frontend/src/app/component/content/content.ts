import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {Menu} from '../../service/menu';
import {MatLineModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-content',
  imports: [
    MatSidenavModule,
    MatLineModule,
    MatIconModule,
    MatListModule,
    RouterModule
  ],
  templateUrl: './content.html',
  styleUrl: './content.scss'
})
export class Content {
  opened=true;
  constructor(private menu:Menu) {
    this.menu.isOpened.subscribe(data=>{
      this.opened=data;
    })
  }
}
