import { Component } from '@angular/core';
import { PageService } from '../page.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private pageService: PageService, public translate: TranslateService) { }

  scrollToSection(sectionId: string) {
    this.pageService.scrollToSection(sectionId);
  }


  openMobileMenu() {
    document.getElementById('headerLinkContainerMobile')?.classList.remove('dNone')
    document.getElementById('burgerMenu')?.classList.add('dNone')
  }


  closeMobileMenu() {
    document.getElementById('headerLinkContainerMobile')?.classList.add('dNone')
    document.getElementById('burgerMenu')?.classList.remove('dNone')
  }

}
