import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-values-card',
  templateUrl: './our-values-card.component.html',
  styles: [],
})
export class OurValuesCardComponent implements OnInit {
  @Input() index: string = '0';
  @Input() image: string = '';

  constructor() {}

  ngOnInit(): void {}
}
