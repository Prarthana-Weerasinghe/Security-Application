import { Component } from '@angular/core';
import { Header} from './component/header/header';
import { MatButtonModule } from '@angular/material/button';
import {Content} from './component/content/content';
import {RouterModule, RouterOutlet} from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterModule,
    Header,
    //Content,
    MatButtonModule,

  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'myCourseUI';
}
