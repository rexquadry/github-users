import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
//Material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from "./material";
//Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { UserDetailsComponent } from './user-details/user-details.component';
//Services

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchResultComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
