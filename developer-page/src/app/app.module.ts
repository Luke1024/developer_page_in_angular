import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { CardBlockComponent } from './card-block/card-block.component';
import { MainViewComponent } from './main-view/main-view.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IntroComponent } from './intro/intro.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardBlockComponent,
    MainViewComponent,
    IntroComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
