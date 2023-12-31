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
  image:'assets/img/simpleCRM.png',
  header: 'Simple CRM',
  subheader: 'Angular | Firebase | Material Design | Typescript | HTML | SCSS',
  text:'A simple customer management system employing Firebase as server and backend.',
  linkLive:'https://simple-crm-7dc7e.web.app/sign-in',
  linkGit:'https://github.com/AnneEberhard/simpleCRM',
  id : 'animateRing'
}
,{
  image:'assets/img/anderland.png',
  header: 'Anderland Books',
  subheader: 'Angular | Typescript | HTML | SCSS',
  text:'The live Website for my little publishing company.',
  linkLive:'https://anderlandbooks.com/',
  linkGit:'https://github.com/AnneEberhard/AnderlandBooksAngular',
  id : 'animateBooks'
}]


animateArray: boolean[] = [false, false, false, false];
private scrolling = false;


}
