import { CommonModule } from '@angular/common';
import { HomeService } from '../../shared/services/home.service';
import { Component, EventEmitter, HostListener, OnInit, Output, Renderer2 } from '@angular/core';
import { HeaderDropdownContainerComponent } from '../header-dropdown-container/header-dropdown-container.component';
@Component({
  selector: 'app-header',
  styleUrl: './header.component.scss',
  templateUrl: './header.component.html',
  imports: [CommonModule, HeaderDropdownContainerComponent],
})
export class HeaderComponent implements OnInit {
  menuOpen: boolean = false;
  isMobile: boolean = false;
  @Output() menuStateChanged: EventEmitter<boolean> = new EventEmitter();
  
  constructor(
    private renderer: Renderer2,
    private homeService: HomeService,
  ) {}

  ngOnInit() {
    this.checkScreenSize();
  }

  get headerLinks() {
    return this.homeService.headerLinks.asReadonly();
  }

  get activeMenuLabel() {
    return this.homeService.activeMenuLabel.asReadonly();
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
    if(this.activeMenuLabel()){
      this.closeMenuForHover();
      this.openMenu();
    }else{
      this.menuOpen = false;
      this.menuStateChanged.emit(this.menuOpen);
      this.renderer.removeStyle(document.body, 'overflow');
    }
  }

  onMenuChange(menuLabel: string) {
    this.menuOpen = false;
    this.homeService.onMenuChange(menuLabel);
  }

  closeMenuForHover() {
    this.homeService.activeMenuLabel.set('');
  }
}
