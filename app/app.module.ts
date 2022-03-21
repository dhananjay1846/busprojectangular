import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyprofilesComponent } from './myprofiles/myprofiles.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { FeedbacksComponent } from './feedbacks/feedbacks.component';
import { UpdateprofileComponent } from './updateprofile/updateprofile.component';

@NgModule({
  declarations: [
    AppComponent,
    MyprofilesComponent,
    FeedbacksComponent,
    UpdateprofileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
