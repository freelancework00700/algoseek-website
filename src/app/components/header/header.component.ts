import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { HomeService } from '../../shared/services/home.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  styleUrl: './header.component.scss',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  menuOpen: boolean = false;
  isMobile: boolean = false;

  constructor(private homeService: HomeService) {}

  ngOnInit() {
    this.checkScreenSize();
  }

  get headerLinks() {
    return this.homeService.headerLinks.asReadonly();
  }

  @HostListener('window:resize')
  checkScreenSize() {
    this.isMobile = window.innerWidth <= 768;
  }

  openMenu() {
    this.menuOpen = true;
  }

  closeMenu() {
    this.menuOpen = false;
  }
}
