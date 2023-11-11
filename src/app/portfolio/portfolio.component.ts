import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {

  portfolio = [{
    image:'assets/img/join.png',
    header: 'Join',
    subheader: 'Javascript | HTML | CSS',
    text:'Task manager based on the Kanban system. Allows for creating tasks, assigning users, subtasks and categories as well as organizing them into different areas.',
    linkLive:'http://anne-eberhard.developerakademie.net/Join-Mono/index.html',
    linkGit:'https://github.com/AnneEberhard/Join-Mono'
  },
  {
    image:'assets/img/Pollo loco.png',
    header: 'El Pollo Loco',
    subheader: 'Javascript | HTML | CSS',
    text:'A Jump-and-Run game built in an object-oriented design. Help Pepe gather coins and salsa bottles to defeat the enemy chickens.',
    linkLive:'http://anne-eberhard.developerakademie.net/ElPolloLoco/index.html',
    linkGit:'https://github.com/AnneEberhard/ElPolloLoco'
  }
,{
  image:'assets/img/ringoffire.png',
  header: 'Ring of Fire',
  subheader: 'Angular | Firebase | Javascript | HTML | CSS',
  text:'A simple card game employing Firebase as server and backend.',
  linkLive:'https://ring-of-fire-ed7a0.web.app/',
  linkGit:'https://github.com/AnneEberhard/ringoffire'
}]

}
