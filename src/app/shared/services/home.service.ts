import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AlgoseekApiService } from './algoseek-api.service';
import {
  AlgoseekConsole,
  DataAndServices,
  DataAndServicesCard,
  DataOfferings,
  HeaderLink,
  HomeAlgoseekConsoleIconSection,
  HomeAlgoseekDataPackages,
  HomeAlgoseekDataPackagesItem,
  HomePageHeroSlider,
  HomePageStatsNumber,
  RealTimeData,
  TrustedPartner,
  UseCases,
} from '../../core/interfaces';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  headerLinks = signal<HeaderLink[]>([]);
  homePageHeroSlides = signal<HomePageHeroSlider[]>([]);
  statsNumbers = signal<HomePageStatsNumber[]>([]);
  trustedPartners = signal<TrustedPartner[]>([]);
  realTimeData = signal<RealTimeData>({
    title: '',
    description: '',
    subtitle: '',
  });
  useCases = signal<UseCases>({ title: '', images: [], subtitle: '' });
  dataOfferings = signal<DataOfferings>({
    id: 1,
    title: '',
    subtitle: '',
    description: '',
    core_reference_data: [],
    extended_reference_data: [],
    market_data: [],
  });
  hpAlgoseekDataPackages = signal<HomeAlgoseekDataPackages>({
    title: '',
    description: 'Data Packages',
    image: '',
    is_new: false,
  });
  hpAlgoseekDataPackagesItem = signal<HomeAlgoseekDataPackagesItem[]>([]);
  algoseekConsole = signal<AlgoseekConsole>({
    title: '',
    description: '',
    content: '',
  });
  hpAlgoseekConsoleIcons = signal<HomeAlgoseekConsoleIconSection>({});
  dataAndServices = signal<DataAndServices>({
    id: 1,
    data_services_cards: [],
    title: '',
    subtitle: '',
    description: '',
  });
  dataAndServicesCards = signal<DataAndServicesCard[]>([]);

  constructor(
    private apiService: AlgoseekApiService,
    private http: HttpClient,
  ) {}

  getHeaderLinks(): Observable<any> {
    const url = `${
      this.apiService._BASE_URL
    }/items/header?fields[]=title_block,description,is_link&fields[]=section.name&fields[]=links.header_links_id.label&fields[]=links.header_links_id.section&fields[]=links.header_links_id.order&fields[]=links.header_links_id.visible&fields[]=links.header_links_id.url&filter[section][name][_eq]=main`;
    return this.http.get(url, { headers: this.apiService.getHeaders() });
  }

  getHeroSliderContent(): Observable<any> {
    const url = `${this.apiService._BASE_URL}/items/slider?fields[]=id,title,subtitle,order,description`;
    return this.http.get(url, { headers: this.apiService.getHeaders() });
  }

  getHomeStatsNumbers(): Observable<any> {
    const url = `${this.apiService._BASE_URL}/items/stats_numbers?fields[]=number,description`;
    return this.http.get(url, { headers: this.apiService.getHeaders() });
  }

  getRealTimeDataContent(): Observable<any> {
    const url = `${this.apiService._BASE_URL}/items/real_time_data_section?fields[]=title,subtitle,description`;
    return this.http.get(url, { headers: this.apiService.getHeaders() });
  }

  getTrustedPartnersContent(): Observable<any> {
    const url = `${this.apiService._BASE_URL}/items/trusted_partners?fields[]=id,order,partner_logo`;
    return this.http.get(url, { headers: this.apiService.getHeaders() });
  }

  getUseCasesContent(): Observable<any> {
    const url = `${
      this.apiService._BASE_URL
    }/items/use_cases_section?fields[]=title,subtitle,images.use_cases_images_id.image,images.use_cases_images_id.order`;
    return this.http.get(url, { headers: this.apiService.getHeaders() });
  }

  getDataOfferingsContent(): Observable<any> {
    const url = `${
      this.apiService._BASE_URL
    }/items/data_offerings?fields%5B%5D=*.data_offering_icons_id.label&fields%5B%5D=*.data_offering_icons_id.svg`;
    return this.http.get(url, { headers: this.apiService.getHeaders() });
  }

  getHpDataPackagesContent(): Observable<any> {
    const url = `${this.apiService._BASE_URL}/items/data_packages?fields[]=is_new,title,description,items,image`;
    return this.http.get(url, { headers: this.apiService.getHeaders() });
  }

  getHpDataPackagesItemContent(): Observable<any> {
    const url = `${this.apiService._BASE_URL}/items/data_packages_item?fields[]=name,description`;
    return this.http.get(url, { headers: this.apiService.getHeaders() });
  }

  getAlgoseekConsoleContent(): Observable<any> {
    const url = `${
      this.apiService._BASE_URL
    }/items/algoseek_console?fields[]=title,content,description`;
    return this.http.get(url, { headers: this.apiService.getHeaders() });
  }

  getHpAlgoseekConsoleIconsContent(): Observable<any> {
    const url = `${
      this.apiService._BASE_URL
    }/items/hp_algoseek_console_icons?fields[]=id,name,svg`;
    return this.http.get(url, { headers: this.apiService.getHeaders() });
  }

  getDataAndServicesContent(): Observable<any> {
    const url = `${
      this.apiService._BASE_URL
    }/items/data_and_services?fields[]=id,title,subtitle,description&fields[]=data_services_cards`;
    return this.http.get(url, { headers: this.apiService.getHeaders() });
  }

  getDataAndServicesCardsContent(): Observable<any> {
    const url = `${
      this.apiService._BASE_URL
    }/items/cards?fields[]=name,image_url`;
    return this.http.get(url, { headers: this.apiService.getHeaders() });
  }
}
