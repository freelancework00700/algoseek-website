export interface HeaderLink {
  label: string;
  section: number;
  order: number;
  visible: boolean;
  url: string | null;
}

export interface HeaderData {
  title_block: string;
  description: string | null;
  is_link: boolean;
  section: { name: string };
  links: { header_links_id: HeaderLink }[];
}

export interface HomePageHeroSlider {
  title: string;
  subtitle: string;
  order: number;
  id?: number;
  description?: string;
}

export interface HomePageStatsNumber {
  description: string;
  value: string;
  suffix: number;
  number: string;
}

export interface TrustedPartner {
  order: number;
  id: number;
  partner_logo?: string;
  imageUrl?: string;
}

export interface RealTimeData {
  title: string;
  description: string;
  subtitle: string;
}

export interface UseCases {
  title: string;
  subtitle: string;
  images: UseCasesImages[];
}

export interface UseCasesImages {
  use_cases_images_id: {
    image: string;
    order: string;
  };
}

export interface DataOfferings {
  title?: string;
  subtitle?: string;
  id?: number;
  description?: string;
  market_data: DataOffering[];
  core_reference_data: DataOffering[];
  extended_reference_data: DataOffering[];
}

interface DataOffering {
  data_offering_icons_id: DataOfferingIcon;
}

interface DataOfferingIcon {
  label: string;
  svg: string;
}

export interface HomeAlgoseekDataPackages {
  description?: string;
  title?: string;
  image?: string;
  is_new?: boolean;
}

export interface HomeAlgoseekDataPackagesItem {
  description?: string;
  name?: string;
}
