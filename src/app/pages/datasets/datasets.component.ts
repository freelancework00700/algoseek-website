import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { DatasetsApiService } from '../../shared/services/datasets-api.service';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { HeaderFooterService } from '../../shared/services/header-footer.service';
@Component({
  selector: 'app-datasets',
  imports: [CommonModule, HeaderComponent, FooterComponent, MatFormFieldModule, MatSelectModule, FormsModule],
  templateUrl: './datasets.component.html',
  styleUrl: './datasets.component.scss',
})
export class DatasetsComponent implements OnInit {
  filters = {
    assetClass: '',
    granularity: '',
    vendor: '',
    region: '',
    searchDataset: '',
  };
  assetOptions: string[] = ['all', ''];
  constructor(
    private headerFooterService: HeaderFooterService,
    private datasetsApiService: DatasetsApiService,
  ) {}
  ngOnInit() {
    this.headerFooterService.initialize();
    this.datasetsSubscriptions();
  }

  get datasets() {
    return this.datasetsApiService.datasets.asReadonly();
  }
  datasetsSubscriptions() {
    this.datasetsApiService
      .getDatasetsContent()
      .subscribe({
        next: (response) => this.datasetsApiService.datasets.set(response),
        error: (error) => console.error('Error fetching datasets:', error),
        complete: () => console.log('Dataset fetching completed'),
      });
  }

  clearFilters() {
    this.filters = {
      assetClass: '',
      granularity: '',
      vendor: '',
      region: '',
      searchDataset: '',
    };
  }

  ngOnDestroy() {
    this.headerFooterService.destroy();
  }
}
