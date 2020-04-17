import { Component } from '@angular/core';
import { AndrewCompComponent } from './andrew-comp/andrew-comp.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
@NgModule ({ imports:[
   MatToolbarModule,MatButtonModule],
   exports:[MatToolbarModule,MatButtonModule]
  })
  
export class AppComponent  {
  name = 'Angular';
}
