import { Component, OnInit ,ViewChild, ElementRef, Renderer2} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { SegmentService } from 'ngx-segment-analytics';

declare var UIkit: any;

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.css']
})
export class FrameComponent implements OnInit {
   yt = '<iframe  src="https://content.soulskill.com/#/playlist?category=Future%20of%20Work" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen style="position:fixed; top:12%; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:1;"></iframe>';
   editable = true;
     content = `<button 
    (click)="onClick()">
    This is a Clickable span
  </button>`;
    public iframe_url : any;
    public useremail : any;
    public user_interested_categories_except_playlist : any;
    public user_interested_categories : any;
    public user_other_categories : any;
    public now_playing : any;
    public categories : any;
    public user_interests : any;
    public all_categories : any; 


  @ViewChild('myDiv') myDiv: ElementRef;
  constructor(private renderer: Renderer2,private route: ActivatedRoute,private segment: SegmentService) 
  {

    
    this.categories = 
      [
    {
      "category_name":'Businesses of the Future',
      "category_image":'https://greenlanetvdemo.imgix.net/businesses+of+the+future+new.jpg?auto=compress&h=400&exp=-5',
      "category_tag":'business_of_the_future',
      "category_iframe_url":'https://content.soulskill.com/#/playlist?category=Businesses%20of%20the%20future'
    },
      {
      "category_name":'Slow Fashion',
      "category_image":'https://greenlanetvdemo.imgix.net/slow+fashion+edited.jpg?auto=compress&h=400&exp=-5',
      "category_tag":'slow_fashion',
      "category_iframe_url":'https://content.soulskill.com/#/playlist?category=Slow%20Fashion'
    },
      {
      "category_name":'Adrenaline and Fitness',
      "category_image":'https://greenlanetvdemo.imgix.net/adrenaline+and+fitness.jpg?auto=compress&h=400&exp=-5',
      "category_tag":'adrenaline_and_fitness',
      "category_iframe_url":'https://content.soulskill.com/#/playlist?category=Fitness%20%26%20Adrenaline'
    },
      {
      "category_name":'Clean Foods',
      "category_image":'https://greenlanetvdemo.imgix.net/clean+foods.jpg?auto=compress&h=400&exp=-5',
      "category_tag":'clean_foods',
      "category_iframe_url":'https://content.soulskill.com/#/playlist?category=Clean%20Foods'
    }
    ,
      {
      "category_name":'Culture',
      "category_image":'https://greenlanetvdemo.imgix.net/culture.jpg?auto=compress&h=400&exp=-5',
      "category_tag":'culture',
      "category_iframe_url":'https://content.soulskill.com/#/playlist?category=Culture'
    },
      {
      "category_name":'Eco Living',
      "category_image":'https://greenlanetvdemo.imgix.net/eco+living.jpg?auto=compress&h=400&exp=-5',
      "category_tag":'eco_living',
      "category_iframe_url":'https://content.soulskill.com/#/playlist?category=Eco%20Living'
    },
      {
      "category_name":'Entertainment and Art',
      "category_image":'https://greenlanetvdemo.imgix.net/entertainment+and+art.jpg?auto=compress&h=400&exp=-5',
      "category_tag":'entertainment_and_art',
      "category_iframe_url":'https://content.soulskill.com/#/playlist?category=Entertainment%20%26%20Arts'
    },
      {
      "category_name":'Farm to Fork',
      "category_image":'https://greenlanetvdemo.imgix.net/farm+to+fork.jpg?auto=compress&h=400&exp=-5',
      "category_tag":'farm_to_fork',
      "category_iframe_url":'https://content.soulskill.com/#/playlist?category=Farm%20to%20Fork'
    }
    ,
      {
      "category_name":'Future of Work',
      "category_image":'https://greenlanetvdemo.imgix.net/future+of+work.jpg?auto=compress&h=400&exp=-5',
      "category_tag":'future_of_work',
      "category_iframe_url":'https://content.soulskill.com/#/playlist?category=Future%20of%20Work'
    },
      {
      "category_name":'Holistic Wellness',
      "category_image":'https://greenlanetvdemo.imgix.net/holistic+wellness.jpg?auto=compress&h=400&exp=-5',
      "category_tag":'holistic_wellness',
      "category_iframe_url":'https://content.soulskill.com/#/playlist?category=Holistic%20Wellness'
    },
      {
      "category_name":'Nature',
      "category_image":'https://greenlanetvdemo.imgix.net/nature.jpg?auto=compress&h=400&exp=-5',
      "category_tag":'nature',
      "category_iframe_url":'https://content.soulskill.com/#/playlist?category=Nature'
    },
      {
      "category_name":'Responsible Travel',
      "category_image":'https://greenlanetvdemo.imgix.net/responsible+travel.jpg?auto=compress&h=400&exp=-5',
      "category_tag":'responsible_travel',
      "category_iframe_url":'https://content.soulskill.com/#/playlist?category=Responsible%20Travel'
    },
      {
      "category_name":'Green Policy',
      "category_image":'https://greenlanetvdemo.imgix.net/green+policy+new.jpg?auto=compress&h=400&exp=-5',
      "category_tag":'green_policy',
      "category_iframe_url":'https://content.soulskill.com/#/playlist?category=Green%20Policy'
    },
      {
      "category_name":'People',
      "category_image":'https://greenlanetvdemo.imgix.net/people.jpg?auto=compressh=400&exp=-5',
      "category_tag":'people',
      "category_iframe_url":'https://content.soulskill.com/#/playlist?category=People'
    },
      {
      "category_name":'Spiritual Sciences',
      "category_image":'https://greenlanetvdemo.imgix.net/spiritual+sciences.jpg?auto=compressh=400&exp=-5',
      "category_tag":'spiritual_sciences',
      "category_iframe_url":'https://content.soulskill.com/#/playlist?category=Spiritual%20Sciences'
    }

    ]
  }

   refresh_other_categories(othercategories)
  {
    this.user_other_categories = []
    othercategories.forEach((cat) => {
      this.categories.forEach((category) => {
        if (category.category_tag == cat)
        {
          this.user_other_categories.push(category)
        }
      })
    })
  }
   refresh_userinterest_categories(user_categories)
  {
    this.user_interested_categories = []
    user_categories.forEach((cat) => {
      this.categories.forEach((category) => {
        if (category.category_tag == cat)
        {
          this.user_interested_categories.push(category)
        }
      })
    })
  }
     refresh_userinterest_not_nowplaying_categories(nowplaying)
  {
    // console.log("now playing",nowplaying)
      this.user_interested_categories_except_playlist = []
      this.user_interested_categories.forEach((cat) => {
        if (nowplaying == cat.category_tag)
        {
          var x = 1
        }
        else {
          this.user_interested_categories_except_playlist.push(cat)
        }
      })
  }

  show_login()
  {
      UIkit.modal('#modal-login').show();
  }

  change_now_playing(category_tag)
  {
    // console.log("console", category_tag)
     this.user_interested_categories.forEach((cat) => {
       if (cat.category_tag == category_tag)
       {
         this.now_playing = cat
         this.iframe_url = '<iframe  src=' + '"' + this.now_playing.category_iframe_url +'" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen style="position:fixed; top:10%; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:1;"></iframe>';
         var now_playing_category_tag = this.now_playing.category_tag
         this.refresh_userinterest_not_nowplaying_categories(now_playing_category_tag)
          var stringtoplay = "Category Played " + category_tag
          this.segment.track(stringtoplay)
            .then(() => console.log("category played sended"));
             UIkit.modal('#my-id').hide();
       }
     })

  }


   add_interest(category_tag)
  {
    this.user_interests.push(category_tag)
    // console.log("user interest", this.user_interests)
     this.refresh_userinterest_categories(this.user_interests)
    let other_categories = this.all_categories.filter(x => !this.user_interests.includes(x));
    // console.log(other_categories)
     this.refresh_other_categories(other_categories)
     var now_playing_category_tag = this.now_playing.category_tag
     this.refresh_userinterest_not_nowplaying_categories(now_playing_category_tag)
     var stringtoadd = "Category Added " + category_tag
     this.segment.track(stringtoadd)
            .then(() => console.log("category added sended"));

     // this.auth.update_interests(this.useremail, this.user_interests)
             // this.user_interests.forEach((interest)=> {
           //     this.categories.forEach((category) => {
           //       if (category.category_tag == interest)
           //       {
           //         this.user_interested_categories.push(category)
           //       }
           //       else 
           //       {
           //         this.user_other_categories.push(category)
           //       }
           //     })
           //   })
  }

    add_category()
    {
        this.segment.track('Add Category No sign In')
            .then(() => console.log(" sended"));
    }

     sign_up_intent()
    {
        this.segment.track('Sign up Intent')
            .then(() => console.log(" signup sended"));
    }



  ngOnInit() 
  {     setTimeout(() => {
        this.show_login()
    }, 180000);
    
    this.user_interests = []
    this.all_categories = ["business_of_the_future","slow_fashion","adrenaline_and_fitness","clean_foods","culture","eco_living","entertainment_and_art","farm_to_fork","future_of_work","holistic_wellness","nature","responsible_travel","green_policy","people","spiritual_sciences"]  
    this.user_other_categories = []
    this.iframe_url = ''
    this.user_interested_categories = []
    this.user_interested_categories_except_playlist = []
     this.route.params.subscribe( params => {
       this.categories.forEach((category:any) => {
        
         if (category.category_tag == params.category_tag)
         {
           // console.log(category)
           this.now_playing = category
           this.iframe_url = '<iframe  src=' + '"' + this.now_playing.category_iframe_url +'" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen style="position:fixed; top:10%; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:1;"></iframe>';
           // console.log("iframe",this.iframe_url)
           var now_playing_category_tag = this.now_playing.category_tag
           this.user_interests = [params.category_tag]
           let other_categories = this.all_categories.filter(x => !this.user_interests.includes(x));
           this.refresh_other_categories(other_categories)
           this.refresh_userinterest_categories(this.user_interests)

         }
   
       })
     
     });
  	 this.renderer.setAttribute(this.myDiv.nativeElement, 'innerHTML', this.content);
  }

}
