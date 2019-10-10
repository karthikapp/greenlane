import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service'

@Component({
  selector: 'app-intrests-edit',
  templateUrl: './intrests-edit.component.html',
  styleUrls: ['./intrests-edit.component.css']
})
export class IntrestsEditComponent implements OnInit {
	public categories: any;
	public interests : any;
	public show_plus_icon: Boolean;
	public user : any;

  constructor(private route: ActivatedRoute, private auth: AuthService) 
  {
  	this.categories = 
  	[
  	{
  		"category_name":'Businesses of the Future',
  		"category_image":'https://greenlanetvdemo.imgix.net/businesses+of+the+future+new.jpg?auto=compress&h=400',
  		"category_tag":'business_of_the_future'
  	},
  		{
  		"category_name":'Slow Fashion',
  		"category_image":'https://greenlanetvdemo.imgix.net/slow+fashion+edited.jpg?auto=compress&h=400',
  		"category_tag":'slow_fashion'
  	},
  		{
  		"category_name":'Adrenaline and Fitness',
  		"category_image":'https://greenlanetvdemo.imgix.net/adrenaline+and+fitness.jpg?auto=compress&h=400',
  		"category_tag":'adrenaline_and_fitness'
  	},
  		{
  		"category_name":'Clean Foods',
  		"category_image":'https://greenlanetvdemo.imgix.net/clean+foods.jpg?auto=compress&h=400',
  		"category_tag":'clean_foods'
  	}
  	,
  		{
  		"category_name":'Culture',
  		"category_image":'https://greenlanetvdemo.imgix.net/culture.jpg?auto=compress&h=400',
  		"category_tag":'culture'
  	},
  		{
  		"category_name":'Eco Living',
  		"category_image":'https://greenlanetvdemo.imgix.net/eco+living.jpg?auto=compress&h=400',
  		"category_tag":'eco_living'
  	},
  		{
  		"category_name":'Entertainment and Art',
  		"category_image":'https://greenlanetvdemo.imgix.net/entertainment+and+art.jpg?auto=compress&h=400',
  		"category_tag":'entertainment_and_art'
  	},
  		{
  		"category_name":'Farm to Fork',
  		"category_image":'https://greenlanetvdemo.imgix.net/farm+to+fork.jpg?auto=compress&h=400',
  		"category_tag":'farm_to_fork'
  	}
  	,
  		{
  		"category_name":'Future of Work',
  		"category_image":'https://greenlanetvdemo.imgix.net/future+of+work.jpg?auto=compress&h=400',
  		"category_tag":'future_of_work'
  	},
  		{
  		"category_name":'Holistic Wellness',
  		"category_image":'https://greenlanetvdemo.imgix.net/holistic+wellness.jpg?auto=compress&h=400',
  		"category_tag":'holistic_wellness'
  	},
  		{
  		"category_name":'Nature',
  		"category_image":'https://greenlanetvdemo.imgix.net/nature.jpg?auto=compress&h=400',
  		"category_tag":'nature'
  	},
  		{
  		"category_name":'Responsible Travel',
  		"category_image":'https://greenlanetvdemo.imgix.net/responsible+travel.jpg?auto=compress&h=400',
  		"category_tag":'responsible_travel'
  	},
  		{
  		"category_name":'Green Policy',
  		"category_image":'https://greenlanetvdemo.imgix.net/green+policy+new.jpg?auto=compress&h=400',
  		"category_tag":'green_policy'
  	},
  		{
  		"category_name":'People',
  		"category_image":'https://greenlanetvdemo.imgix.net/people.jpg?auto=compressh=400',
  		"category_tag":'people'
  	},
  		{
  		"category_name":'Spiritual Sciences',
  		"category_image":'https://greenlanetvdemo.imgix.net/spiritual+sciences.jpg?auto=compressh=400',
  		"category_tag":'spiritual_sciences'
  	}

  	]

  	
  }

  show_correct_icon(interest)
  {
  	if (this.interests.indexOf(interest) >= 0)
  	{
  		this.show_plus_icon = false
  	}
  	else
  	{
  		this.show_plus_icon =  true;
  	}
  	return this.show_plus_icon
  }

  redirect_to_iframe(interests)
  {
    let u = this.user;
    this.user = 
    {
      "first_name": u.first_name,
      "last_name": u.last_name,
      "email": u.email,
      "interests": interests
    }

    if (interests.length == 0)
    {
      alert("Please select atleast one category !")
    }
    else
    {
      this.auth.add_interests(this.user.email, interests)

    }
    


  }


  addinterests(interest)
  {
  	
  	if (this.interests.indexOf(interest) >= 0)
  	{
  		
  		this.interests = this.interests.filter(v => v !== interest);
  		

  	}
  	else
  	{
  		this.interests.push(interest)
  		
  	}
  }

  ngOnInit() 
  {
  	 this.interests = []
  	 this.route.params.subscribe(params => {
      this.user = params
     
    });

  }

}
