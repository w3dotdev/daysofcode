// Angular is a development platform for building mobile and desktop web applications using TypeScript/JavaScript and other languages.
// https://angular.io/
//
// npm install -g @angular/cli
// ng new day84
// ng serve
// http://localhost:4200/
//
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Nerd Calistênico';
}
