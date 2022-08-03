import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-values-section',
  templateUrl: './our-values-section.component.html',
  styles: [
  ]
})
export class OurValuesSectionComponent implements OnInit {

  @Input() title: string = '';
  
  constructor() { }

  ngOnInit(): void {
  }

}
