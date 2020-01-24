import { Component } from '@angular/core';
import { ColorcubeComponent } from './colorcube/colorcube.component';

declare var Module: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'from C++ to Angular';
  multiplyResult: number;
  getLengthResult: number;

  multiply(a: number, b: number): void {
    this.multiplyResult = Module.ccal(
      'multiply', // function name
      'number', // return type
      ['number', 'number'], // argument types
      [a, b] // psarameters
    );
  }

  getLength(s: string): void {
    this.getLengthResult = Module.ccall(
      'get_length', // function name
      'number', // return type
      ['string'], // argument type
      [s] // parameter
    );
  }

}
