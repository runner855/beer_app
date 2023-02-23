export enum AppUrls {
  BEERS = "/beers",
  RANDOM = "/random",
}

export enum LanguageEnum {
  EN = "en",
}

export interface BeersDataProps {
  abv: number;
  attenuation_level: number;
  boil_volume: BeerBoilVolumeProps;
  brewers_tips: string;
  contributed_by: string;
  description: string;
  ebc: number;
  first_brewed: string;
  food_pairing: [];
  ibu: number;
  id: number;
  image_url: string;
  ingredients: BeerIngredientsProps;
  method: MethodProps;
  name: string;
  ph: number;
  srm: number;
  tagline: string;
  target_fg: number;
  target_og: number;
  volume: BeerVolumeProps;
}

export interface BeerVolumeProps {
  value: number;
  unit: string;
}

export interface BeerBoilVolumeProps {
  value: number;
  unit: string;
}

export interface MethodProps {
  fermentation: TempProps;
  mash_temp: MashTempProps[];
  twist: string;
}

export interface TempProps {
  temp: TempDataProps;
}

export interface TempDataProps {
  unit: string;
  value: number;
}

export interface MashTempProps {
  duration: number;
  temp: TempDataProps;
}

export interface BeerIngredientsProps {
  hops: BeerHopsProps[];
  malt: BeerMaltProps[];
  yeast: string;
}

export interface BeerHopsProps {
  add: string;
  amount: BeerHopsAmountProps;

  attribute: string;
  name: string;
}

export interface BeerHopsAmountProps {
  unit: string;
  value: number;
}

export interface BeerMaltProps {
  amount: BeerHopsAmountProps;
  name: string;
}
