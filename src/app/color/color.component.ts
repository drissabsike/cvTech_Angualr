import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  color = 'red';
  constructor() {}

  ngOnInit(): void {
  }

  // @ts-ignore
  changeColor(input) {
    console.log(input.value);
    this.color=input.value;
    input.value = '';
  }
  processReq (message: any){
      alert(message);
  }

}
