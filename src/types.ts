export enum NationName {
  ussr = "ussr",
  japan = "japan",
  usa = "usa",
  uk = "uk",
  germany = "germany",
  france = "france",
  italy = "italy",
  europe = "europe",
  panAsia = "pan_asia",
  commonwealth = "commonwealth",
  panAmerica = "pan_america",
  netherlands = "netherlands",
  spain = "spain",
}

export enum VehicleTypeName {
  Cruiser = "Cruiser",
  AirCarrier = "AirCarrier",
  Battleship = "Battleship",
  Destroyer = "Destroyer",
  Submarine = "Submarine",
}

export type LocalizationData = Record<string, string>;

export type VehicleTypeIconType = "default" | "premium";

export type VehicleTypeIconUrls = Record<VehicleTypeIconType, string>;

export type VehicleIconUrls = Record<string, string>;

export interface Localization {
  mark?: LocalizationData;
  shortmark?: LocalizationData;
  description?: LocalizationData;
}

export interface Vehicle {
  id: string;
  level: number;
  name: string;
  icons: VehicleIconUrls;
  type: VehicleTypeName;
  tags: string[];
  nation: NationName;
  localization: Localization;
}

export interface Nation {
  name: NationName;
  icons: Record<string, string>;
  color: number;
  tags: string[];
  localization: Localization;
  id: number;
}

export interface VehicleType {
  id: VehicleTypeName;
  icons: VehicleTypeIconUrls
  sort_order: number;
  localization: Localization;
  name: string;
}
