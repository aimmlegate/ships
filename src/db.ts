// db.ts
import Dexie, { Table } from "dexie";
import { Nation, Vehicle, VehicleType } from "./types";

export class VehiclesDexie extends Dexie {
  vehicles!: Table<Vehicle>;
  nations!: Table<Nation>;
  vehiclesTypes!: Table<VehicleType>;

  constructor() {
    super("VehiclesDatabase");
    this.version(1).stores({
      vehicles:
        "id, level, icons, nation, type, [nation+type], *tags, localization",
      nations: "id, name, icons, color, *tags, localization",
      vehiclesTypes: "id, icons, sort_order, localization, name",
    });
  }
}

export const db = new VehiclesDexie();
