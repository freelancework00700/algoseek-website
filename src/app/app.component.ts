import { Component, HostListener, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeService } from './shared/services/home.service';
import { Subject, takeUntil } from 'rxjs';
import { HeaderData } from './core/interfaces';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    CommonModule
  ],
  styleUrl: './app.component.scss',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  isHeaderVisible: boolean = true;
  previousScrollPosition: number = 0;
  _destroy$ = new Subject<void>();
  isDarkHeader: boolean = false;
  isMenuOpen: boolean = false;

  constructor(
    private homeService: HomeService,
    private router: Router
  ) {}
  
  ngOnInit() {
    this.contentSubscriptions();
    this.checkRoute();
    this.isHeaderVisible = true;
  }

  private checkRoute() {
    this.router.events.subscribe(() => {
      this.isDarkHeader = this.router.url.includes('/infraX');
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY;
    if (scrollY > this.previousScrollPosition && !this.isMenuOpen) {
      this.isHeaderVisible = false;
    } else {
      this.isHeaderVisible = true;
    }
    this.previousScrollPosition = scrollY;
  }

  onMenuStateChanged(menuState: boolean) {
    this.isMenuOpen = menuState;
  }

  contentSubscriptions() {
    this.homeService
      .getHeaderLinks()
      .pipe(takeUntil(this._destroy$))
      .subscribe({
        next: (response) => this.setHeaderLinks(response.data[0]),
        error: (error) => console.error('Error in getHeaderLinks:', error),
      });

    this.homeService
      .getFooterLinksContent()
      .pipe(takeUntil(this._destroy$))
      .subscribe({
        next: (response) => {
          this.homeService.footerLinks.set(response.data);
        },
        error: (error) => {
          console.error(error);
        }
      });
  }

  private setHeaderLinks(data: HeaderData) {
    const visibleLinks = data.links.filter((link) => link.header_links_id.visible !== false);
    this.homeService.headerLinks.set(
      visibleLinks.map((link) => link.header_links_id).sort((a, b) => a.order - b.order),
    );
  }
}
