import { Component, OnInit } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CurrencyPipe } from '@angular/common';


@Component({
  
  selector: 'andrew-comp',
  templateUrl: './andrew-comp.component.html',
  styleUrls: ['./andrew-comp.component.css']
})
@NgModule ({ imports:[
   MatToolbarModule,MatButtonModule],
   exports:[MatToolbarModule,MatButtonModule]
  })

export class AndrewCompComponent implements OnInit {

  products = [
    {"id":1,"name":"Licensed Frozen Hat","description":"Incidunt et magni","price":"170.00","quantity":56840},
    {"id":2,"name":"Rustic Concrete Chicken","description":"Sint libero mollitia","price":"302.00","quantity":9358},
    {"id":3,"name":"Fantastic Metal Computer","description":"In consequuntur cupiditat","price":"279.00","quantity":90316},
    {"id":4,"name":"Refined Concrete Chair","description":"Saepe nemo praesentium","price":"760.00","quantity":5899}
];
  constructor() { 


  }

  ngOnInit() {
    
  }
  
  formCur(price){
    let numObj = price;
    numObj = parseFloat(numObj).toFixed(2)
    return "$" + numObj;
  }
  prodVal(item){
    alert("Quantity Available: " + item.quantity + " Cost Per: " + this.formCur(item.price));
  }
  

}

