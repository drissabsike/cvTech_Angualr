import { Component, OnInit } from '@angular/core';
import {Personne} from "../../Model/Personne";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  personnes: Personne [];

  constructor() { }

  ngOnInit(): void {
    this.personnes =[
      new Personne(1,'absike','idriss',25,'meToon.jpg','It Engineer'),
      new Personne(2,'kamoun','aymen',27,'img.png','BI Engineer')
    ];
  }

}
