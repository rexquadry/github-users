import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
//Material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from "./material";
//Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
//Services
import { UsersService } from "./users.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchResultComponent,
    UserDetailsComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
