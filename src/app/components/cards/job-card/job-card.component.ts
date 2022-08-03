import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styles: [],
})
export class JobCardComponent implements OnInit {
  @Input() role: string = '';
  @Input() location: string = '';

  constructor() {}

  ngOnInit(): void {}
}
