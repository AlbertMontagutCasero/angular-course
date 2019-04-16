import { Component } from '@angular/core';
import {GLOBAL} from './global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Productos Angular';
  public headerColor: string;

  constructor() {
    this.headerColor = GLOBAL.headerColor;
  }
}
