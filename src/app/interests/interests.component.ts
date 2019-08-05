import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit {
	public useremail: any;
	public userid: any;
	public userimage: any;
	public username: any


  constructor(private route: ActivatedRoute) 
  {
  	this.route.queryParams.subscribe(params => {
            // this.firstname = params["firstname"];
            // this.lastname = params["lastname"];
            this.useremail = params["useremail"];
            this.userid = params["userid"];
            this.userimage = params["userimage"];
            this.username = params["username"];
        });
    }

  

  ngOnInit() {
  }

}
