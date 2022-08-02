import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [],
})
export class NavbarComponent implements OnInit {
  isSidebarOpen: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  openSidebar() {
    this.isSidebarOpen = true;
  }

  closeSidebar() {
    this.isSidebarOpen = false;
  }
}
