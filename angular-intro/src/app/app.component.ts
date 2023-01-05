import { Component } from '@angular/core';
import {Person} from "./person";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Angular is fun!';
  counter: number = 0;
  name: string = "Lars";
  persons: Person[] = [
    {name: "Lars", phone: "123"},
    {name: "Carl", phone: "567"}
  ]



  ngOnInit() {
    setInterval(() => this.counter++, 200);
    console.log("Take that....");
  }

  resetCounter() {
    this.counter = 0;
  }

  alert(msg:string) {
    alert(msg)
  }
}
