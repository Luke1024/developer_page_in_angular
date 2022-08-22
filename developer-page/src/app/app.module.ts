import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CardBlockComponent } from './card-block/card-block.component';
import { MainViewComponent } from './main-view/main-view.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IntroComponent } from './intro/intro.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BarComponent } from './about/card-circular-bar/bar/bar.component';
import { CardCircularBarComponent } from './about/card-circular-bar/card-circular-bar.component';
import { CardComponent } from './card/card.component';
import { CardModalComponent } from './card-modal/card-modal.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MainModalComponent } from './main-modal/main-modal.component';
import { DescriptionComponent } from './description/description.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ImageComponent } from './image/image.component';

@NgModule({
  declarations: [
    AppComponent,
    CardBlockComponent,
    MainViewComponent,
    IntroComponent,
    AboutComponent,
    ContactComponent,
    BarComponent,
    CardCircularBarComponent,
    CardComponent,
    CardModalComponent,
    NavbarComponent,
    MainModalComponent,
    DescriptionComponent,
    NotfoundComponent,
    ImageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot([
      {path: "home", component:MainViewComponent},
      {path: "description/:id", component:DescriptionComponent},
      {path: '', redirectTo: '/home', pathMatch: 'full'},
      {path: '**', component:NotfoundComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
