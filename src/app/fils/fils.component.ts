import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit {

  // @ts-ignore
  @Input() filsProperty;
  @Output() sendRequestToData = new EventEmitter();
  constructor() { }

  //Methode qui declanche direcement a pres l'initialisation d'un component
  ngOnInit(): void {
    console.log('fils compenent: voici le couleur de mon pere: ',this.filsProperty);//voir le contenu
  }
  sendEven() {
    this.sendRequestToData.emit(
        'can i have some money :) '
    );
  }

}
