// scroll-to-top-button.component.ts
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-to-top-button',
  templateUrl: './scroll-to-top-button.component.html',
  styleUrls: ['./scroll-to-top-button.component.scss']
})

export class ScrollToTopButtonComponent {
  showScrollTopButton: boolean = false;
  windowHeight = window.innerHeight;
  scrollThreshold = this.windowHeight * 0.2;

  
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }


  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollPosition = window.scrollY;
    this.showScrollTopButton = scrollPosition > this.scrollThreshold;
  }
}

