import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainblogComponent } from './mainblog/mainblog.component';
import { ReadmoreComponent } from './readmore/readmore.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Mainblog1Component } from './mainblog1/mainblog1.component';
import { Blog1Component } from './blog1/blog1.component';
import { Mainblog2Component } from './mainblog2/mainblog2.component';

@NgModule({
  declarations: [
    AppComponent,
    MainblogComponent,
    ReadmoreComponent,
    Mainblog1Component,
    Blog1Component,
    Mainblog2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 