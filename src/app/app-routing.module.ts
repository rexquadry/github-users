import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { SearchResultComponent } from "./search-result/search-result.component";
import { UserDetailsComponent } from "./user-details/user-details.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search', component: SearchResultComponent },
  { path: 'user/:id', component: UserDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
