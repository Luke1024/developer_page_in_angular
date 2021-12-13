import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { CardBlockComponent } from './card-block/card-block.component';
import { MainViewComponent } from './main-view/main-view.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IntroComponent } from './intro/intro.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BarComponent } from './about/card-circular-bar/bar/bar.component';
import { CardCircularBarComponent } from './about/card-circular-bar/card-circular-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardBlockComponent,
    MainViewComponent,
    IntroComponent,
    AboutComponent,
    ContactComponent,
    BarComponent,
    CardCircularBarComponent
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
