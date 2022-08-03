import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq-card',
  templateUrl: './faq-card.component.html',
  styles: [],
})
export class FaqCardComponent implements OnInit {
  displayAnswer: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.displayAnswer = !this.displayAnswer;
  }
}
