import { Component } from '@angular/core';
import { AndrewCompComponent } from './andrew-comp/andrew-comp.component';
import { AppRoutingModule } from './app-routing/app-routing.module';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
}
