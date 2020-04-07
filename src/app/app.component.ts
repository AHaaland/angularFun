import { Component } from '@angular/core';
import { AndrewCompComponent } from './andrew-comp/andrew-comp.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
}
