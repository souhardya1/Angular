import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public name = "SOUHARDYA";
  public name2 = "purbasha"
  public person = {
    "firstname": "Souhardya",
    "lastname" : "chakraborty"
  };
  public date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
