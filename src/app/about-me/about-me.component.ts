import { Component, HostListener } from '@angular/core';
import { fadeIn } from '../animations/fade-in.animation';
import { slideAndWiggle } from '../animations/slide-and-wiggle.animation';
import { wiggle } from '../animations/wiggle.animation';
import { slide } from '../animations/slide.animations';


@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  animations: [fadeIn, slideAndWiggle, wiggle, slide],
})

export class AboutMeComponent {

}
