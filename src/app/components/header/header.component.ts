import { CommonModule } from '@angular/common';
import { Component, HostListener, Input, OnChanges, OnInit, Renderer2 } from '@angular/core';
import { HomeService } from '../../shared/services/home.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  styleUrl: './header.component.scss',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnChanges {
  menuOpen: boolean = false;
  isMobile: boolean = false;
  @Input() isDarkHeader!: boolean;

  constructor(
    private homeService: HomeService,
    private renderer: Renderer2
  ) {
  }

  ngOnChanges() {
    if (this.isDarkHeader) {
      this.renderer.setStyle(document.body, 'background-color', '#000');
    }
  }

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
