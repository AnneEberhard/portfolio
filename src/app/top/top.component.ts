import { Component } from '@angular/core';
import { PageService } from '../page.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent {

  constructor(private pageService: PageService) { }

  scrollToSection(sectionId: string) {
    this.pageService.scrollToSection(sectionId);
  }
}
