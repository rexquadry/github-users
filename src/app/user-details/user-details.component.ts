import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { UsersService } from "../users.service";
import { UserInterface } from "../user-interface";
import { ReposInterface } from "../repos-interface";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  user: UserInterface;
  userRepos: ReposInterface[];

  constructor(private route: ActivatedRoute, private userService: UsersService) { }

  ngOnInit() {
    const userid = this.route.snapshot.paramMap.get('id');
    //
    this.userService.fetchUser(userid).subscribe(user =>{
      this.user = user;
      
    })
    this.userService.fetchRepos(userid).subscribe(repos => {
      this.userRepos = repos;
    })
  }

}
