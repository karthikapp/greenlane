import { Component, OnInit,AfterContentInit,Input,ChangeDetectionStrategy, ViewEncapsulation  } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { LazyLoadScriptService } from '../lazy-load-script.service';
import { map, filter, take, switchMap } from 'rxjs/operators';
import { EmbedVideoService } from 'ngx-embed-video';
import { AuthService } from '../services/auth.service'

declare var $;
@Component({
  selector: 'app-new-home',
  templateUrl: './new-home.component.html',
  styleUrls: ['./new-home.component.css']
})
export class NewHomeComponent implements OnInit {
  public config: any;
  public fullpage_api: any;
  public youtubeUrl = 'https://www.youtube.com/embed/ijjbnjBtqwU';
  public categories: any;
  public email: any;




  constructor(private auth: AuthService) {
    this.categories = 
    [
    {
      "category_name":'Businesses of the Future',
      "category_image":'assets/images/businesses of the future.jpg',
      "category_number":'01',

      "category_text":'From increasing energy efficiency to constant innovation to decrease our carbon footprint while managing our resources better - businesses must take the lead in our fight for a greener, cleaner tomorrow.'
    },
    {
      "category_name":'Slow Fashion',
      "category_number":'02',
      "category_image":'assets/images/slow fashion alt.jpg',
      "category_text":'We produce 10 billion garments each year! Do we really need so much? Let’s mend before we throw, let’s swap before we’re bored and buy clothes that last. Support  labels who prioritise the people who make our garments and the environment.'
    },
    {
      "category_name":'Adrenaline and Fitness',
      "category_number":'03',
      "category_image":'assets/images/adrenaline and fitness.jpg',
      "category_text":'Dancing on waves, gliding through the wind, flying through the sky, breathing underwater - we can do anything. Let’s play in a world that longs to be celebrated. Explore natural techniques to keep your mind and body in top form.'
    },
    {
      "category_name":'Clean Foods',
      "category_number":'04',
      "category_image":'assets/images/clean foods.png',
      "category_text":'Whether you eat to live, or live to eat it you can’t deny that food is our life force. Animals have used plants as medicine since the beginning of time. Dive head first into this extraordinary world where plants and people quite simply just meant for each other.'
    }
    ,
    {
      "category_name":'Culture',
      "category_number":'05',
      "category_image":'assets/images/culture.jpg',
      "category_text":'Folklore and traditions have essentially advocated well-being for ourselves and the environment. Lets learn from ancient communities across the world and inculcate their top practices into our lives.'
    },
    {
      "category_name":'Eco Living',
      "category_number":'06',
      "category_image":'assets/images/eco living.jpg',
      "category_text":'The climate crisis is real! To combat this complex problem, we all need to contribute by lowering our own carbon footprint and making greener choices. Explore how we can incorporate some of natures beautiful design systems into our lives.'
    },
    {
      "category_name":'Entertainment and Art',
      "category_number":'07',
      "category_image":'assets/images/entertainment and art.png',
      "category_text":'Art has always stood to challenge the narrative, provoke thought, question choices and engage communities. We want to celebrate art and artists brave enough to envision a new global paradigm that honours and respects our planet, and all that it encompasses.'
    },
    {
      "category_name":'Farm to Fork',
      "category_number":'08',
      "category_image":'assets/images/farm to fork.jpg',
      "category_text":'Do you know who grows your food? How it was grown? Did it travel from miles away to reach your plate? Let’s start asking ourselves these questions. Let’s start seeking answers. Maybe together, we can start to save the world one bite at a time.'
    }
    ,
    {
      "category_name":'Future of Work',
      "category_number":'09',
      "category_image":'assets/images/future of work.jpg',
      "category_text":'In a world where we can work from anywhere, let‘s understand how we can use technology & AI to make sustainable & regenerative lifestyle practices more accessible.'
    },
    {
      "category_name":'Holistic Wellness',
      "category_number":'10',
      "category_image":'assets/images/holistic wellness.png',
      "category_text":'Integrated wellness is a lifestyle that focuses on cultivating good food & sleep habits, and practices like yoga & meditation to reduce stress levels. Let‘s explore ‘shifts‘ in our lifestyle to achieve our health goals.'
    },
    {
      "category_name":'Nature',
      "category_number":'11',
      "category_image":'assets/images/nature.jpg',
      "category_text":'This channel celebrates the extraordinary diversity of life that exists on planet earth, and serves as inspiration to make better, smarter choices. After all, it’s our home'
    },
    {
      "category_name":'Responsible Travel',
      "category_number":'12',
      "category_image":'assets/images/responsible travel.jpg',
      "category_text":'We want to showcase that conscious choices makes for a far more authentic experience for the traveller. By choosing to make the smallest changes in your approach to travel, we believe the planet and you stand to benefit!'
    },
    {
      "category_name":'Green Policy',
      "category_number":'13',
      "category_image":'assets/images/green policy alt.jpg',
      "category_text":'In the time its taken to argue that climate change is a pollution problem, it has in fact become so much more than just that. What we need is something that can help us catch up on the time we’ve lost. Let’s combine policy and design for a better tomorrow.'
    },
    {
      "category_name":'People',
      "category_number":'14',
      "category_image":'assets/images/people alt.jpg',
      "category_text":'The human experience is one of splendid glory. There is so much to learn, experience and discover. Serving as an ode to the people who strive to make our planet a better place to live in, this channel will share their unique human experience.'
    },
    {
      "category_name":'Spiritual Sciences',
      "category_number":'15',
      "category_image":'assets/images/spiritual sciences.png',
      "category_text":'Who are we ? What is consciousness?  Science is continuously evolving, and this channel is dedicated to expanding our knowledge base of the world’s most magical life'
    }

    ]







    // {
      // 	    // for more details on config options please visit fullPage.js docs
      this.config = {

        // fullpage options
        licenseKey: 'C2B0E785-B40C4D15-BFD02C1F-0DEA4203',
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthpage','lastpage'],
        menu: '#menu',
      };



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




    getRef(fullPageRef) {
      this.fullpage_api = fullPageRef;

    }



    ngOnInit() 
    {

    }
  }




