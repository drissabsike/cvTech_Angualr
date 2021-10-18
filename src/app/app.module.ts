import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { GrandChildComponent } from './grand-child/grand-child.component';
import { ColorComponent } from './color/color.component';
import {FormsModule} from "@angular/forms";
import { FilsComponent } from './fils/fils.component';
import { CvComponent } from './cvTech/cv/cv.component';
import { ListCvComponent } from './cvTech/list-cv/list-cv.component';
import { ItemCvComponent } from './cvTech/item-cv/item-cv.component';
import { DetailCvComponent } from './cvTech/detail-cv/detail-cv.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildAComponent,
    ChildBComponent,
    GrandChildComponent,
    ColorComponent,
    FilsComponent,
    CvComponent,
    ListCvComponent,
    ItemCvComponent,
    DetailCvComponent
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
