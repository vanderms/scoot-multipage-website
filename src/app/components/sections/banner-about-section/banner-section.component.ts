import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-section',
  templateUrl: './banner-section.component.html',
  styles: [],
})
export class BannerSectionComponent implements OnInit {
  @Input() image: string = '';
  @Input() title: string = '';

  constructor() {}

  ngOnInit(): void {}

  getSrc(viewport: 'desktop' | 'tablet' | 'mobile') {
    return `/assets/images/${this.image}-hero-${viewport}.jpg`;
  }
}
