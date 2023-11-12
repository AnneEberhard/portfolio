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
  animate = true
  private scrolling = false;

@HostListener('window:scroll', [])

onScroll(): void {
  if (!this.scrolling) {
    this.scrolling = true;
    setTimeout(() => {
      const scrollPosition = window.scrollY;
      const element = document.getElementById('aboutMe');
      const elementPosition = element?.offsetTop ?? 0;
      this.animate = scrollPosition > elementPosition - 500;
      console.log(this.animate);
      this.scrolling = false;    
    }, 300);
  }
}
}
