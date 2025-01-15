import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { takeUntil, Subject } from 'rxjs';
import { HomeService } from './home.service';
import { HeaderData } from '../../core/interfaces';

@Injectable({ providedIn: 'root' })
export class HeaderFooterService {
  private _destroy$ = new Subject<void>();

  constructor(private homeService: HomeService) {}

  initialize() {
    this.headerFooterContentSubscription();
  }

 headerFooterContentSubscription() {

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
          next: (response) => this.homeService.footerLinks.set(response.data),
          error: (error) => console.error('Error in getFooterLinksContent:', error),
        });     
    }

    private setHeaderLinks(data: HeaderData) {
      const visibleLinks = data.links.filter((link) => link.header_links_id.visible !== false);
      this.homeService.headerLinks.set(
        visibleLinks.map((link) => link.header_links_id).sort((a, b) => a.order - b.order),
      );
    }


  destroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
