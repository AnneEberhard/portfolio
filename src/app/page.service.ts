import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor() { }

  scrollToSection(sectionId: string) {
    console.log('do')
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
