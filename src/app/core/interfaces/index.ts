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
  suffix: string;
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

export interface AlgoseekConsole {
  title: string;
  description: string;
  content: string;
}

export interface HomeAlgoseekConsoleIcon {
  name: string;
  id?: number;
  svg: string;
}

export interface HomeAlgoseekConsoleIconSection {
  top?: HomeAlgoseekConsoleIcon[];
  middle?: HomeAlgoseekConsoleIcon[];
  bottom?: HomeAlgoseekConsoleIcon[];
}

export interface DataAndServices {
  id: number;
  title?: string;
  subtitle?: string;
  description?: string;
  data_services_cards?: any[];
}

export interface DataAndServicesCard {
  name?: string | null;
  image_url: string;
}

export interface FooterLinks {
  label: string;
  url?: string;
  order?: number;
}

export interface CompanyTabsHeroSections{
  id?: number;
  title?: string;
  subtitle?: string;
  description?: string;

}

export interface CompanyVisionDialogue{
id: number;
speaker: string;
order: number;
text: string;
speaker_image?: any;
}


export interface CompanyMissionStatement {
id: number;
order: number;
title: string;
subtitle: string;
content?: string;
}
export interface CompanyMissionDataChallenges {
title: string;
content?: string;
}
export interface CompanyMember {
id: number;
order: number;
name: string;
nickname?: string;
occupation?: string;
description?: string;
photo?: string;
}
export interface CompanyOurTeamMembers{
id?: number;
title?: string;
members?:CompanyMember[];
}

export interface CompanyAboutUsContent {
title?: string;
quote?: string;
content?: string;
}

export interface CompanyAboutUsTransform {
title: string;
blocks: AboutUsTransformBlockId[];
}

export interface AboutUsTransformBlockId {
about_us_transform_blocks_id: {
  order: number;
  content: string;
};
}

export interface CompanyAboutUsYears {
year?: number;
order?: number;
description?: string;
}


export interface GroupedLinks {
  [key: string]: HeaderLink[];
}
export interface Section {
  name: string;
}

export interface Link {
  header_links_id: HeaderLink;
}

export interface HeaderDropDownLinks{
  title_block: string;
  description: string;
  is_link: boolean;
  section: Section;
  links:  GroupedLinks ;
}

export interface HeaderContacts {
  contact_info: string;
  method: string;
}