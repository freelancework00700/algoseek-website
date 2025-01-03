import { CommonModule } from '@angular/common';
import { Component, EventEmitter, HostListener, Input, OnChanges, OnInit, Output, Renderer2 } from '@angular/core';
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
  @Output() menuStateChanged: EventEmitter<boolean> = new EventEmitter();

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
    this.menuStateChanged.emit(this.menuOpen);
    this.renderer.setStyle(document.body, 'overflow', 'hidden');
  }

  closeMenu() {
    this.menuOpen = false;
    this.menuStateChanged.emit(this.menuOpen);
    this.renderer.removeStyle(document.body, 'overflow');
  }
}
