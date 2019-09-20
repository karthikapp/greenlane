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
  		"category_image":'assets/images/businesses of the future.jpg',
  		"category_tag":'business_of_the_future'
  	},
  		{
  		"category_name":'Slow Fashion',
  		"category_image":'assets/images/slow fashion alt.jpg',
  		"category_tag":'slow_fashion'
  	},
  		{
  		"category_name":'Adrenaline and Fitness',
  		"category_image":'assets/images/adrenaline and fitness.jpg',
  		"category_tag":'adrenaline_and_fitness'
  	},
  		{
  		"category_name":'Clean Foods',
  		"category_image":'assets/images/clean foods.png',
  		"category_tag":'clean_foods'
  	}
  	,
  		{
  		"category_name":'Culture',
  		"category_image":'assets/images/culture.jpg',
  		"category_tag":'culture'
  	},
  		{
  		"category_name":'Eco Living',
  		"category_image":'assets/images/eco living.jpg',
  		"category_tag":'eco_living'
  	},
  		{
  		"category_name":'Entertainment and Art',
  		"category_image":'assets/images/entertainment and art.png',
  		"category_tag":'entertainment_and_art'
  	},
  		{
  		"category_name":'Farm to Fork',
  		"category_image":'assets/images/farm to fork.jpg',
  		"category_tag":'farm_to_fork'
  	}
  	,
  		{
  		"category_name":'Future of Work',
  		"category_image":'assets/images/future of work.jpg',
  		"category_tag":'future_of_work'
  	},
  		{
  		"category_name":'Holistic Wellness',
  		"category_image":'assets/images/holistic wellness.png',
  		"category_tag":'holistic_wellnes'
  	},
  		{
  		"category_name":'Nature',
  		"category_image":'assets/images/nature.jpg',
  		"category_tag":'nature'
  	},
  		{
  		"category_name":'Responsible Travel',
  		"category_image":'assets/images/responsible travel.jpg',
  		"category_tag":'responsible_travel'
  	},
  		{
  		"category_name":'Green Policy',
  		"category_image":'assets/images/green policy alt.jpg',
  		"category_tag":'green_policy'
  	},
  		{
  		"category_name":'People',
  		"category_image":'assets/images/people alt.jpg',
  		"category_tag":'people'
  	},
  		{
  		"category_name":'Spiritual Sciences',
  		"category_image":'assets/images/spiritual sciences.png',
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
    this.auth.add_interests(this.user.email, interests)


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
