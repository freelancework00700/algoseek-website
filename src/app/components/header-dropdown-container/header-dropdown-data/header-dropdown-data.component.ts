import { Component } from '@angular/core';

@Component({
  selector: 'app-header-dropdown-data',
  templateUrl: './header-dropdown-data.component.html',
  styleUrl: './header-dropdown-data.component.scss',
})
export class HeaderDropdownDataComponent {
  // data arrays
  usMarketData: string[] = [
    'Equity',
    'ETF/ETN',
    'Indices',
    'Equity Options',
    'Futures',
    'Future Options',
    'Cash Forex',
    'Cryptocurrencies',
  ];

  referenceData: string[] = [
    'Equity Security Master File',
    'Future Security Master File',
    'Equity Adjustment Factors',
    'Full Corporate Events',
    'Options Security Master',
    'Greeks and IV',
  ];

  extendedReferenceData: string[] = [
    'News Feed',
    'Fundamentals',
    'IPOs/Announcements',
    'Index Compositions',
    'US Mutual Funds',
  ];

  realtimeData: string[] = ['For Business', 'For Academic'];

  individualData: string[] = ['Equities', 'Options', 'Futures', 'Future Options', 'OTC Data'];

  isDropdownOpen: boolean = false;

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
