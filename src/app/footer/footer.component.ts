import { Component } from '@angular/core';
import { PageService } from '../page.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(private pageService: PageService) {  }

  scrollToSection(sectionId: string) {
    console.log(sectionId);
    this.pageService.scrollToSection(sectionId);
  }
}
