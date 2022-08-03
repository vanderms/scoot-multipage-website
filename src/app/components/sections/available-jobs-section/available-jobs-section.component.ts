import { Component, OnInit } from '@angular/core';

const AVAILABLE_JOBS = [
  {
    role: 'General Manager',
    location: 'Jakarta, Indonesia',
  },
  {
    role: 'UI/UX Designer',
    location: 'Yokohama, Japan',
  },
  {
    role: 'Blog Content Copywriter',
    location: 'New York, United States',
  },
  {
    role: 'Graphic Designer',
    location: 'New York, United States',
  },
  {
    role: 'Fleet Supervisor',
    location: 'Jakarta, Indonesia',
  },
  {
    role: 'UX Analyst',
    location: 'London, United Kingdom',
  },
];

@Component({
  selector: 'app-available-jobs-section',
  templateUrl: './available-jobs-section.component.html',
  styles: [],
})
export class AvailableJobsSectionComponent implements OnInit {
  jobs = AVAILABLE_JOBS;

  constructor() {}

  ngOnInit(): void {}
}
