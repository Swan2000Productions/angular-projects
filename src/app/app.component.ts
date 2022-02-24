import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: Array<any> = [];
  constructor () {
    this.items = [
{ name: 'assets/images/pic001.jpg' }, 
{ name: 'assets/images/pic002.jpg' }, 
{ name: 'assets/images/pic003.jpg' }, 
{ name: 'assets/images/pic004.jpg' }, 
{ name: 'assets/images/pic005.jpg' }, 
{ name: 'assets/images/pic006.jpg' }, 

];
}
}

