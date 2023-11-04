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
    text:'Task manager based on the Kanban system. Allows for creating tasks, assigning users, subtasks and categories as well as organizing them into different areas',
    linkLive:'http://anne-eberhard.developerakademie.net/Join-Mono/index.html',
    linkGit:'https://github.com/AnneEberhard/Join-Mono'
  },
  {
    image:'assets/img/Pollo loco.png',
    header: 'El Pollo Loco',
    subheader: 'Javascript | HTML | CSS',
    text:'A Jump-and-Run game built in an object-oriented design. Help Pepe gather coins and salsa bottles to defeat the enemy chicks.',
    linkLive:'http://anne-eberhard.developerakademie.net/ElPolloLoco/index.html',
    linkGit:'https://github.com/AnneEberhard/ElPolloLoco'
  }
,{
  image:'assets/img/portfolio.png',
  header: 'Simple CRM',
  subheader: 'Angular | Firebase | Javascript | HTML | CSS',
  text:'tbd.',
  linkLive:'',
  linkGit:''
},
{
  image:'assets/img/booksta.png',
  header: 'Bookstagram',
  subheader: 'Javascript | HTML | CSS',
  text:'A bookstagram page based on Instagram.',
  linkLive:'http://anne-eberhard.developerakademie.net/instagram/index.html',
  linkGit:'https://github.com/AnneEberhard/myInstagram'
}]

}
