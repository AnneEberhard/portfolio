import { ViewportScroller } from '@angular/common';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-privacy-police',
  templateUrl: './privacy-police.component.html',
  styleUrls: ['./privacy-police.component.scss']
})
export class PrivacyPoliceComponent { private readonly viewport = inject(ViewportScroller)

  scrollToTop(): void {
    this.viewport.scrollToPosition([0,0])
  }
}
