import { Injectable, signal } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AlgoseekApiService } from './algoseek-api.service';
import {
  AlgoseekConsole,
  DataAndServices,
  DataAndServicesCard,
  DataOfferings,
  FooterLinks,
  HeaderData,
  HeaderLink,
  HomeAlgoseekConsoleIcon,
  HomeAlgoseekConsoleIconSection,
  HomeAlgoseekDataPackages,
  HomeAlgoseekDataPackagesItem,
  HomePageHeroSlider,
  HomePageStatsNumber,
  RealTimeData,
  TrustedPartner,
  UseCases,
} from '../../core/interfaces';

export interface ApiResponse<T> {
  data: T;
}

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  headerLinks = this.createSignal<HeaderLink[]>([]);
  homePageHeroSlides = this.createSignal<HomePageHeroSlider[]>([]);
  statsNumbers = this.createSignal<HomePageStatsNumber[]>([]);
  trustedPartners = this.createSignal<TrustedPartner[]>([]);
  realTimeData = this.createSignal<RealTimeData>({
    title: '',
    description: '',
    subtitle: '',
  });
  useCases = this.createSignal<UseCases>({ title: '', images: [], subtitle: '' });
  dataOfferings = this.createSignal<DataOfferings>({
    id: 1,
    title: '',
    subtitle: '',
    description: '',
    core_reference_data: [],
    extended_reference_data: [],
    market_data: [],
  });
  hpAlgoseekDataPackages = this.createSignal<HomeAlgoseekDataPackages>({
    title: '',
    description: 'Data Packages',
    image: '',
    is_new: false,
  });
  hpAlgoseekDataPackagesItem = this.createSignal<HomeAlgoseekDataPackagesItem[]>([]);
  algoseekConsole = this.createSignal<AlgoseekConsole>({
    title: '',
    description: '',
    content: '',
  });
  hpAlgoseekConsoleIcons = this.createSignal<HomeAlgoseekConsoleIconSection>({});
  dataAndServices = this.createSignal<DataAndServices>({
    id: 1,
    data_services_cards: [],
    title: '',
    subtitle: '',
    description: '',
  });
  dataAndServicesCards = this.createSignal<DataAndServicesCard[]>([]);
  footerLinks = this.createSignal<FooterLinks[]>([]);

  constructor(
    private apiService: AlgoseekApiService,
    private http: HttpClient,
  ) {}

  private createSignal<T>(defaultValue: T) {
    return signal<T>(defaultValue);
  }

  private fetchData<T>(endpoint: string, fields: string[], filters?: Record<string, any>) {
    let params = new HttpParams().set('fields', fields.join(','));
    if (filters) {
      filters['forEach']((filter: { key: string[], value: string }) => {
        const key = filter.key;
        const value = filter.value;
        if (Array.isArray(key)) {
          const filterStr = key.join('][');
          params = params.set(`filter[${filterStr}]`, value);
        }
      });
    }
    const url = `${this.apiService._BASE_URL}/items/${endpoint}`;
    return this.http.get<any>(url, { headers: this.apiService.getHeaders(), params });
  }

  getHeaderLinks(): Observable<ApiResponse<HeaderData[]>> {
    return this.fetchData<HeaderData>(
      'header',
      [
        'title_block',
        'description',
        'is_link',
        'section.name',
        'links.header_links_id.label',
        'links.header_links_id.section',
        'links.header_links_id.order',
        'links.header_links_id.visible',
        'links.header_links_id.url',
      ],
      [
        { 
          key: ['section', 'name', '_eq'],
          value: 'main'
        }
      ]
    );
  }

  getHeroSliderContent(): Observable<ApiResponse<HomePageHeroSlider[]>> {
    return this.fetchData<HomePageHeroSlider>('slider', ['id', 'title', 'subtitle', 'order', 'description']);
  }

  getHomeStatsNumbers(): Observable<ApiResponse<HomePageStatsNumber[]>> {
    return this.fetchData<HomePageStatsNumber>('stats_numbers', ['number', 'description']);
  }

  getRealTimeDataContent(): Observable<ApiResponse<RealTimeData>> {
    return this.fetchData<RealTimeData>('real_time_data_section', ['title', 'subtitle', 'description']);
  }

  getTrustedPartnersContent(): Observable<ApiResponse<TrustedPartner[]>> {
    return this.fetchData<TrustedPartner>('trusted_partners', ['id', 'order', 'partner_logo']);
  }

  getUseCasesContent(): Observable<ApiResponse<UseCases>> {
    return this.fetchData<UseCases>('use_cases_section', [
      'title',
      'subtitle',
      'images.use_cases_images_id.image',
      'images.use_cases_images_id.order',
    ]);
  }

  getDataOfferingsContent(): Observable<ApiResponse<DataOfferings[]>> {
    return this.fetchData<DataOfferings>('data_offerings', [
      '*.data_offering_icons_id.label',
      '*.data_offering_icons_id.svg',
    ]);
  }

  getHpDataPackagesContent(): Observable<ApiResponse<HomeAlgoseekDataPackages[]>> {
    return this.fetchData<HomeAlgoseekDataPackages>('data_packages', [
      'is_new',
      'title',
      'description',
      'items',
      'image',
    ]);
  }

  getHpDataPackagesItemContent(): Observable<ApiResponse<HomeAlgoseekDataPackagesItem[]>> {
    return this.fetchData<HomeAlgoseekDataPackagesItem>('data_packages_item', ['name', 'description']);
  }

  getAlgoseekConsoleContent(): Observable<ApiResponse<AlgoseekConsole[]>> {
    return this.fetchData<AlgoseekConsole>('algoseek_console', ['title', 'content', 'description']);
  }

  getHpAlgoseekConsoleIconsContent(): Observable<ApiResponse<HomeAlgoseekConsoleIcon[]>> {
    return this.fetchData<HomeAlgoseekConsoleIcon>('hp_algoseek_console_icons', ['id', 'name', 'svg']);
  }

  getDataAndServicesContent(): Observable<ApiResponse<DataAndServices[]>> {
    return this.fetchData<DataAndServices>('data_and_services', [
      'id',
      'title',
      'subtitle',
      'description',
      'data_services_cards',
    ]);
  }

  getDataAndServicesCardsContent(): Observable<ApiResponse<DataAndServicesCard[]>> {
    return this.fetchData<DataAndServicesCard>('cards', ['name', 'image_url']);
  }

  getFooterLinksContent(): Observable<ApiResponse<FooterLinks[]>> {
    return this.fetchData<FooterLinks>('footer_links', ['label', 'order', 'url']);
  }
}
