import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { UsersService } from "../users.service";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  /* searchUserInput = new FormControl('', [
    Validators.required,
    Validators.email,
  ]); */
  searchTerm: string;
  pageNum: number;

  constructor(private users: UsersService) {
    this.pageNum = 1;
  }

  ngOnInit() {
  }

  doSearch(){
    console.log('Search Term', this.searchTerm, this.pageNum);
    this.users.getUsers(this.searchTerm, this.pageNum).subscribe((response) => {
      console.log(response);
    })
  }

}
