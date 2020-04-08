import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{inpt["title"]}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  private sub : any;
  private inpt : any;
  constructor (private route: ActivatedRoute){}
    ngOnInit() {
    this.sub = this.route
      .data
      .subscribe(data => //console.log(data)
      {this.inpt = data});
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
