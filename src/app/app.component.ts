// består af import sætninger
import { Component } from '@angular/core';

//decorator - det er meta data om en Component
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// export => betyder at jeg kan importerer den et andet sted.
export class AppComponent {
  // Herinde skriver vi typescript blandt andet
  // variabel / property i min class - er det typescript?
  title = 'Flemmings bix volvo'; // javascript
  title2:string = "value her"; // typescript
  //title3:string = 123; // fjols!!
}
/*
Components - ng generate component mappe/componentNavn (short: ng g c mappe/componentNavn)
Benytte en Component i Angular Structure
variabler
metoder
kald variabel i html
kald metode i html
|
{{}} Interpolation
(click)="metodenavn()" EventBinding / statements

https://angular.io/guide/template-syntax
*/
