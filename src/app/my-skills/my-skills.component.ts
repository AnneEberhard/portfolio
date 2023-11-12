import { Component, ElementRef, HostListener, QueryList, ViewChildren } from '@angular/core';
import { PageService } from '../page.service';
import { fadeIn } from '../animations/fade-in.animation';
import { slideAndWiggle } from '../animations/slide-and-wiggle.animation';
import { wiggle } from '../animations/wiggle.animation';
import { slide } from '../animations/slide.animations';


@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss'],
  animations: [fadeIn, slideAndWiggle, wiggle, slide],
})
export class MySkillsComponent {
  skillSet = [{
    icon: 'assets/img/icons/angular_big.png',
    alt: 'angular logo',
    title: 'Angular',
  },
  {
    icon: 'assets/img/icons/css_big.png',
    alt: 'css logo',
    title: 'CSS',
  },
  {
    icon: 'assets/img/icons/firebase_big.png',
    alt: 'firebase logo',
    title: 'Firebase',
  },
  {
    icon: 'assets/img/icons/git_big.png',
    alt: 'git  logo',
    title: 'GIT',
  },
  {
    icon: 'assets/img/icons/html_big.png',
    alt: 'html logo',
    title: 'HTML',
  },
  {
    icon: 'assets/img/icons/js_big.png',
    alt: 'javascript logo',
    title: 'JavaScript',
  },
  {
    icon: 'assets/img/icons/matdes_big.png',
    alt: 'material design logo',
    title: 'Material design',
  },
  {
    icon: 'assets/img/icons/api_big.png',
    alt: 'rest-api logo',
    title: 'REST-API',
  },
  {
    icon: 'assets/img/icons/scrum_big.png',
    alt: 'scrum logo',
    title: 'Scrum',
  },
  {
    icon: 'assets/img/icons/ts_big.png',
    alt: 'typescript logo',
    title: 'TypeScript',
  },
  ]

  animate = false;
  private scrolling = false;

  constructor(private pageService: PageService) { }

  scrollToSection(sectionId: string) {
    this.pageService.scrollToSection(sectionId);
  }

  @HostListener('window:scroll', [])

  onScroll(): void {
    if (!this.scrolling) {
      this.scrolling = true;
      setTimeout(() => {
        const scrollPosition = window.scrollY;
        const element = document.getElementById('mySkills');
        const elementPosition = element?.offsetTop ?? 0;
        this.animate = scrollPosition > elementPosition - 500;
        console.log(this.animate);
        this.scrolling = false;
      }, 300);
    }
  }

}
