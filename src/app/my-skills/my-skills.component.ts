import { Component } from '@angular/core';
import { PageService } from '../page.service';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss']
})
export class MySkillsComponent {
  constructor(private pageService: PageService) {}

  scrollToSection(sectionId: string) {
    this.pageService.scrollToSection(sectionId);
  }
}
