import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { UsersService } from "../users.service";
import { SearchInterface } from "../search-interface";

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  result: SearchInterface;

  constructor(private users: UsersService) { }

  ngOnInit() {
    this.users.usersResult.subscribe( res => {
      console.log('res', res);
      this.result = res;
    })
  }

}
