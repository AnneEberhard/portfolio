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
    image: 'assets/img/join.png',
    header: 'Join',
    subheader: 'Javascript | HTML | CSS | Django | Python | SQL',
    text: 'Task manager based on the Kanban system. Allows for creating tasks, assigning users, subtasks and categories as well as organizing them into different areas. The backend ist hostet at pythonanywhere.',
    linkLive: 'https://join.anne-eberhard.de/',
    linkGit: 'https://github.com/AnneEberhard/scrumboard_frontend',
    linkBack: 'https://anne.pythonanywhere.com/admin/',
    linkBackGit: 'https://github.com/AnneEberhard/scrumboard_backend',
    link2: 'BE GitHub',
    id: 'animateJoin'
  },
  {
    image: 'assets/img/Pollo loco.png',
    header: 'El Pollo Loco',
    subheader: 'Javascript | HTML | CSS',
    text: 'A Jump-and-Run game built in an object-oriented design. Help Pepe gather coins and salsa bottles to defeat the enemy chickens.',
    linkLive: 'https://elpolloloco.anne-eberhard.de/',
    linkGit: 'https://github.com/AnneEberhard/ElPolloLoco',
    id: 'animateElPollo'
  }
    , {
    image: 'assets/img/anderland.png',
    header: 'Anderland Books',
    subheader: 'Angular | Typescript | HTML | SCSS',
    text: 'The live Website for my little publishing company.',
    linkLive: 'https://anderlandbooks.com/',
    linkGit: 'https://github.com/AnneEberhard/AnderlandBooksAngular',
    id: 'animateBooks'
  }
    , {
    image: 'assets/img/laufklub.png',
    header: 'Laufklub Hameln',
    subheader: 'Javascript | HTML | CSS| Firebase',
    text: 'A plain Javascript website with a Firebase backend (members only).',
    linkLive: 'https://laufklub-hameln.de',
    linkGit: 'https://github.com/AnneEberhard/Laufklub_Frontend',
    id: 'animateLauf'
  },
  {
    image: 'assets/img/kempeundco.png',
    header: 'Kempe und Co',
    subheader: 'Angular | Typescript | HTML | SCSS | Django | Python | SQL',
    text: 'An angular frontend end and django backend hosted on pythonanywhere, depicting a dynamic family tree with the possibility of discussions (members only).',
    linkLive: 'https://kempeundco.de',
    linkGit: 'https://github.com/AnneEberhard/kempeUndCo_frontend',
    linkBack: 'https://kempeundco.pythonanywhere.com/admin/',
    linkBackGit: 'https://github.com/AnneEberhard/kempeUndCo_backend',
    link2: 'BE GitHub',
    id: 'animateKempe'
  }
    , {
    image: 'assets/img/annakthomas.png',
    header: 'Anna K. Thomas',
    subheader: 'Javascript | HTML | CSS ',
    text: 'A plain JS website for Author Anna K. Thomas, in German andn English.',
    linkLive: 'https://annakthomas.de',
    linkGit: 'https://github.com/AnneEberhard/AnnaKThomas',
    id: 'animateAnna'
  }

    //,{
    //  image:'assets/img/simpleCRM.png',
    //  header: 'Simple CRM',
    //  subheader: 'Angular | Firebase | Material Design | Typescript | HTML | SCSS',
    //  text:'A simple customer management system employing Firebase as server and backend.',
    //  linkLive:'https://simplecrm.anne-eberhard.de/sign-in',
    //  linkGit:'https://github.com/AnneEberhard/simpleCRM',
    //  id : 'animateRing'
    //}
    //{
    //  image:'assets/img/anderlandflix.png',
    //  header: 'Anderlandflix',
    //  subheader: 'Angular | Typescript | HTML | SCSS| Django | Redis | SQL',
    //  text:'A Netflix clone, the backend being hostet on Google cloud. Server currently not running.',
    //  linkLive:'https://anderlandflix.com/',
    //  linkGit:'https://github.com/AnneEberhard/videoflix_frontend',
    //  linkBack: 'https://backend.anderlandflix.com/admin/',
    //  linkBackGit:'https://github.com/AnneEberhard/videoflix_backend',
    //  link2: 'BE GitHub',
    //  id : 'animateJoin'
    //},
    //{
    //  image:'assets/img/simpleChat.png',
    //  header: 'Simple Chat',
    //  subheader: 'Javascript | HTML | CSS | Material Design | Django | SQL',
    //  text:'A simple chat app hostet on pythonanywhere. As an exception, backend and frontend are not separated. A not-hosted alternative using websockets is available on GitHub.',
    //  linkLive:'https://annessimplechat.pythonanywhere.com/',
    //  linkGit:'https://github.com/AnneEberhard/simple_chat',
    //  linkBackGit:'https://github.com/AnneEberhard/websocket',
    //  link2: 'Websocket',
    //  id : 'animateJoin'
    //},
  ]


  animateArray: boolean[] = [false, false, false, false];
  private scrolling = false;


}
