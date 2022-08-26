import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  name:string = "Souhardya";
  age:number = 23;

  constructor() { }
  License(){
    if (this.age>18) {
      return "You can drive"
    }
    else{
      return "You can not drive"
    }
  }

  ngOnInit(): void {
  }

}
