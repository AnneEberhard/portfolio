import { Component, HostListener } from '@angular/core';
import { fadeIn } from '../animations/fade-in.animation';
import { slideAndWiggle } from '../animations/slide-and-wiggle.animation';
import { wiggle } from '../animations/wiggle.animation';
import { slide } from '../animations/slide.animations';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  animations: [fadeIn, slideAndWiggle, wiggle, slide],
})
export class PortfolioComponent {

  portfolio = [{
    image:'assets/img/join.png',
    header: 'Join',
    subheader: 'Javascript | HTML | CSS',
    text:'Task manager based on the Kanban system. Allows for creating tasks, assigning users, subtasks and categories as well as organizing them into different areas.',
    linkLive:'http://anne-eberhard.developerakademie.net/Join-Mono/index.html',
    linkGit:'https://github.com/AnneEberhard/Join-Mono',
    id : 'animateJoin'
  },
  {
    image:'assets/img/Pollo loco.png',
    header: 'El Pollo Loco',
    subheader: 'Javascript | HTML | CSS',
    text:'A Jump-and-Run game built in an object-oriented design. Help Pepe gather coins and salsa bottles to defeat the enemy chickens.',
    linkLive:'http://anne-eberhard.developerakademie.net/ElPolloLoco/index.html',
    linkGit:'https://github.com/AnneEberhard/ElPolloLoco',
    id : 'animateElPollo'
  }
,{
  image:'assets/img/ringoffire.png',
  header: 'Ring of Fire',
  subheader: 'Angular | Firebase | Javascript | HTML | CSS',
  text:'A simple card game employing Firebase as server and backend.',
  linkLive:'https://ring-of-fire-ed7a0.web.app/',
  linkGit:'https://github.com/AnneEberhard/ringoffire',
  id : 'animateRing'
}
,{
  image:'assets/img/anderland.png',
  header: 'Anderland Books',
  subheader: 'Angular | Javascript | HTML | CSS',
  text:'The live Website for my little publishing company.',
  linkLive:'https://anderlandbooks.com/',
  linkGit:'https://github.com/AnneEberhard/AnderlandBooksAngular',
  id : 'animateBooks'
}]


animateArray: boolean[] = [false, false, false];
private scrolling = false;


@HostListener('window:scroll', [])
onScroll(): void {
  if (!this.scrolling) {
    this.scrolling = true;
    setTimeout(() => {
      const scrollPosition = window.scrollY;
      this.animateArray = this.portfolio.map(item => this.checkVisibility(scrollPosition, item.id));
      this.scrolling = false;
    }, 300);
  }
}


checkVisibility (scrollPosition: number, id: string) {
  const element = document.getElementById(id);
  const elementPosition = element?.offsetTop ?? 0;
  return scrollPosition > elementPosition - 500;
}
}
