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

export interface Localization {
  mark?: Record<string, string>;
  shortmark?: Record<string, string>;
  description?: Record<string, string>;
}

export interface Vehicle {
  id: string;
  level: number;
  name: string;
  icons: Record<string, string>;
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
  icons: Record<string, string>;
  sort_order: number;
  localization: Localization;
  name: string;
}
