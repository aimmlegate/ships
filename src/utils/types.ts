export enum NationName {
  ussr = 'ussr',
  japan = 'japan',
  usa = 'usa',
  uk = 'uk',
  germany = 'germany',
  france = 'france',
  italy = 'italy',
  europe = 'europe',
  panAsia = 'pan_asia',
  commonwealth = 'commonwealth',
  panAmerica = 'pan_america',
  netherlands = 'netherlands',
  spain = 'spain',
}

export enum VehicleTypeName {
  Cruiser = 'Cruiser',
  AirCarrier = 'AirCarrier',
  Battleship = 'Battleship',
  Destroyer = 'Destroyer',
  Submarine = 'Submarine',
}

export enum Language {
  'ru' = 'ru',
  'fr' = 'fr',
  'en' = 'en',
  'nl' = 'nl',
  'uk' = 'uk',
  'pt_br' = 'pt_br',
  'zh_cn' = 'zh_cn',
  'tr' = 'tr',
  'de' = 'de',
  'ko' = 'ko',
  'it' = 'it',
  'pl' = 'pl',
  'th' = 'th',
  'cs' = 'cs',
  'es_mx' = 'es_mx',
  'zh_sg' = 'zh_sg',
  'ja' = 'ja',
  'es' = 'es',
  'zh_tw' = 'zh_tw',
}

export type LocalizationData = Record<Language, string>;

export type VehicleTypeIconType = 'default' | 'premium';

export type VehicleTypeIconUrls = Record<VehicleTypeIconType, string>;

export type VehicleIconUrls = Record<string, string>;

export interface Localization {
  mark?: LocalizationData;
  shortmark?: LocalizationData;
  description?: LocalizationData;
}

export interface Vehicle {
  level: number;
  name: string;
  icons: VehicleIconUrls;
  tags: string[];
  nation: NationName;
  localization: Localization;
}

export interface VehicleTable extends Vehicle {
  id: string;
  type: VehicleTypeName;
}

export type VehicleResponse = Record<string, Vehicle>;

export interface Nation {
  id: number;
  name: NationName;
  icons: Record<string, string>;
  color: number;
  tags: string[];
  localization: Localization;
}

export type NationResponse = Nation[];

export interface VehicleType {
  icons: VehicleTypeIconUrls;
  sort_order: number;
  localization: Localization;
  name: string;
}

export type VehicleTypeResponse = Record<VehicleTypeName, VehicleType>;
