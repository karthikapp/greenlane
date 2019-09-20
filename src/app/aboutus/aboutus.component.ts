import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service'
@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
  public email: any;
  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

   addsubscriber(email)
    {
      console.log(email)
      this.auth.add_to_subscribers(email).then((result) => {
        console.log("res", result)
        alert('Thanks for subscribing')
      }).catch((error) => {
        console.log("err", error)
      })
    }


}
