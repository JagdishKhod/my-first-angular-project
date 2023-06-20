import { Component } from '@angular/core';
import { count } from 'rxjs';

@Component(
  {
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  }
)
export class AppComponent {
  title = 'Lets Learn Angular';

  displayVal:string='';
 getData(val:string){
    console.warn(val)
    this.displayVal=val
 }
 count=0;
 counter(type:string)
 {
type==='add' ? this.count++ : this.count-- ;      // "?" --is ternary operator in angular and ":" is treated as else 
 
 }
}