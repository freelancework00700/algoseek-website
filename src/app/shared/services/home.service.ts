import {
  UseCases,
  HeaderData,
  HeaderLink,
  FooterLinks,
  RealTimeData,
  DataOfferings,
  TrustedPartner,
  DataAndServices,
  AlgoseekConsole,
  HomePageHeroSlider,
  DataAndServicesCard,
  HomePageStatsNumber,
  HomeAlgoseekConsoleIcon,
  HomeAlgoseekDataPackages,
  HomeAlgoseekConsoleIconSection,
  HomeAlgoseekDataPackagesItem,
  HeaderDropDownLinks,
  HeaderContacts,
} from '../../core/interfaces';
import { Observable } from 'rxjs';
import { Injectable, signal } from '@angular/core';
import { AlgoseekApiService } from './algoseek-api.service';
import { HttpClient, HttpParams } from '@angular/common/http';

export interface ApiResponse<T> {
  data: T;
}

@Injectable({ providedIn: 'root' })
export class HomeService {
  activeMenuLabel = this.createSignal<string>('');
  headerLinks = this.createSignal<HeaderLink[]>([]);
  footerLinks = this.createSignal<FooterLinks[]>([]);
  trustedPartners = this.createSignal<TrustedPartner[]>([]);
  statsNumbers = this.createSignal<HomePageStatsNumber[]>([]);
  homePageHeroSlides = this.createSignal<HomePageHeroSlider[]>([]);
  dataAndServicesCards = this.createSignal<DataAndServicesCard[]>([]);
  hpAlgoseekConsoleIcons = this.createSignal<HomeAlgoseekConsoleIconSection>({});
  useCases = this.createSignal<UseCases>({ title: '', images: [], subtitle: '' });
  hpAlgoseekDataPackagesItem = this.createSignal<HomeAlgoseekDataPackagesItem[]>([]);
  headerContacts = this.createSignal<HeaderContacts[]>([]);
  realTimeData = this.createSignal<RealTimeData>({
    title: '',
    subtitle: '',
    description: '',
  });

  dataOfferings = this.createSignal<DataOfferings>({
    id: 1,
    title: '',
    subtitle: '',
    description: '',
    market_data: [],
    core_reference_data: [],
    extended_reference_data: [],
  });

  algoseekConsole = this.createSignal<AlgoseekConsole>({
    title: '',
    content: '',
    description: '',
  });

  dataAndServices = this.createSignal<DataAndServices>({
    id: 1,
    data_services_cards: [],
    title: '',
    subtitle: '',
    description: '',
  });

  hpAlgoseekDataPackages = this.createSignal<HomeAlgoseekDataPackages>({
    title: '',
    image: '',
    is_new: false,
    description: 'Data Packages',
  });

  HeaderDropDownLinks = this.createSignal<HeaderDropDownLinks>({
    title_block: 'Data',
    is_link: false,
    links: {},
    description: '',
    section: { name: 'Data' },
  });
  headerServicesLinks = this.createSignal<HeaderDropDownLinks>({
    title_block: 'Services',
    is_link: false,
    links: {},
    description: '',
    section: { name: 'Services' },
  });
  headerCompanyLinks = this.createSignal<HeaderDropDownLinks>({
    title_block: 'Company',
    is_link: false,
    links: {},
    description: '',
    section: { name: 'Company' },
  });

  constructor(
    private http: HttpClient,
    private apiService: AlgoseekApiService,
  ) {}

  private createSignal<T>(defaultValue: T) {
    return signal<T>(defaultValue);
  }

  private fetchData<T>(endpoint: string, fields: string[], filters?: Record<string, any>) {
    let params = new HttpParams().set('fields', fields.join(','));
    if (filters) {
      filters['forEach']((filter: { key: string[]; value: string }) => {
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
          value: 'main',
        },
      ],
    );
  }

  getHeaderDataLinks(): Observable<ApiResponse<HeaderDropDownLinks[]>> {
    return this.fetchData<HeaderDropDownLinks>(
      'header',
      [
        'title_block',
        'description',
        'is_link',
        'section.name',
        'links.header_links_id.label',
        'links.header_links_id.section',
        'links.header_links_id.order',
        'links.header_links_id.url',
      ],
      [
        {
          key: ['section', 'name', '_eq'],
          value: 'Data',
        },
      ],
    );
  }
  getHeaderServiceLinks(): Observable<ApiResponse<HeaderDropDownLinks[]>> {
    return this.fetchData<HeaderDropDownLinks>(
      'header',
      [
        'title_block',
        'description',
        'is_link',
        'section.name',
        'links.header_links_id.label',
        'links.header_links_id.section',
        'links.header_links_id.order',
        'links.header_links_id.url',
      ],
      [
        {
          key: ['section', 'name', '_eq'],
          value: 'Services',
        },
      ],
    );
  }
  getHeaderCompanyLinks(): Observable<ApiResponse<HeaderDropDownLinks[]>> {
    return this.fetchData<HeaderDropDownLinks>(
      'header',
      [
        'title_block',
        'description',
        'is_link',
        'section.name',
        'links.header_links_id.label',
        'links.header_links_id.section',
        'links.header_links_id.order',
        'links.header_links_id.url',
      ],
      [
        {
          key: ['section', 'name', '_eq'],
          value: 'Company',
        },
      ],
    );
  }
  getHeaderContacts(): Observable<ApiResponse<HeaderContacts[]>> {
    return this.fetchData<HeaderContacts>('contacts', ['method','contact_info']);
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

  onMenuChange(menuLabel: string) {
    this.activeMenuLabel.set(menuLabel);
  }
}
