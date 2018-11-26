import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import {ServicecategoryService} from './service/servicecategory.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import { CarouselModule, WavesModule } from 'angular-bootstrap-md';
import {ButtonModule} from 'primeng/button';
import {SafeHtml} from './service/safe.html.pipe';
import {RouterModule} from '@angular/router';
import {appRouting} from './app.routing';
import {NgxPageScrollModule} from 'ngx-page-scroll';


@NgModule({
  declarations: [
    AppComponent,
    SafeHtml
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ButtonModule,
    CarouselModule,
    WavesModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    NgxPageScrollModule,
    RouterModule,
    appRouting
  ],
  providers: [ServicecategoryService, SafeHtml],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ],
  exports: [SafeHtml]
})
export class AppModule { }
