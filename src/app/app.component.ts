import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  show = false;
  bgColor = 'lightblue';

  changeStatus(){
    this.show = !this.show;
  }


}
