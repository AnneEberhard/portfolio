import { Component } from '@angular/core';
import { PageService } from '../page.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private pageService: PageService) {}

  scrollToSection(sectionId: string) {
    this.pageService.scrollToSection(sectionId);
  }
}
