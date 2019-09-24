import { Component, OnInit ,ViewChild, ElementRef, Renderer2} from '@angular/core';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.css']
})
export class FrameComponent implements OnInit {
   yt = '<iframe  src="https://content.soulskill.com/#/playlist?category=Future%20of%20Work" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen style="position:fixed; top:10%; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:1;"></iframe>';
   editable = true;
     content = `<button 
    (click)="onClick()">
    This is a Clickable span
  </button>`;

  @ViewChild('myDiv') myDiv: ElementRef;
  constructor(private renderer: Renderer2) 
  {

  }

  ngOnInit() {
  	 this.renderer.setAttribute(this.myDiv.nativeElement, 'innerHTML', this.content);
  }

}