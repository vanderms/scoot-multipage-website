import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-icon-card',
  templateUrl: './icon-card.component.html',
  styles: [
  ]
})
export class IconCardComponent implements OnInit {

  @Input() icon: string = '';
    
  constructor() { }

  ngOnInit(): void {
  }

}
