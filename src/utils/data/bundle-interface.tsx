export interface IBundleRoots {
  bundelItems: IBundelItem[];
  title: string;
  label: string;
  description: string;
  image: IImage;
}

export interface IBundelItem {
  id: number;
  aangemaaktDatum: IAangemaaktDatum;
  bijgewerktDatum: IBijgewerktDatum;
  titel: string;
  urlAlias: string;
  afbeelding: IAfbeelding;
  branded: IBranded;
  sectie: ISectie;
  overigeSecties: IOverigeSecty[];
  labelValue: string;
  labelType: string;
  metadata: IMetadata3;
  chapeau: string;
  lead: string;
  showVideoIcon: boolean;
  isPremium: boolean;
  type: string;
}

export interface IImage {
  imageUrl: string;
  crops: ICrop[];
  type: string;
}

export interface IAangemaaktDatum {
  timestamp: number;
  formatted: string;
}

export interface IBijgewerktDatum {
  timestamp: number;
  formatted: string;
}

export interface IAfbeelding {
  bijschrift?: string | null;
  copyright?: string | null;
  afbeelding: string;
  crops: ICrop[];
  type: string;
}

export interface ICrop {
  type: string;
  height: number;
  width: number;
  ratio: string;
  path: string;
}

export interface IBranded {
  status: boolean;
  label: any;
  partnerLogo: any;
  partnerUrl: any;
  clickTracker: any;
  impressieTracker: any;
}

export interface ISectie {
  id: number;
  title: string;
  beschrijving?: string | null;
  woordenboek: string;
  url: string;
  analytics: any;
  advertising: any;
  items: any;
  pager: any;
  regions: any[];
  metadata: IMetadata;
  type: string;
}

export interface IMetadata {
  entityType: string;
  entityBundle: string;
  template: string;
  theme: string;
}

export interface IOverigeSecty {
  id: number;
  title: string;
  beschrijving?: string | null;
  woordenboek: string;
  url: string;
  analytics: any;
  advertising: any;
  items: any;
  pager: any;
  regions: any[];
  metadata: IMetadata2;
  type: string;
}

export interface IMetadata2 {
  entityType: string;
  entityBundle: string;
  template: string;
  theme: string;
}

export interface IMetadata3 {
  entityType: string;
  entityBundle: string;
  template: string;
  theme: string;
}
