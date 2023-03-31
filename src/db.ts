import Dexie, { Table } from 'dexie';

import { VehicleTable } from './types';

export class VehiclesDexie extends Dexie {
  vehicles!: Table<VehicleTable>;

  constructor() {
    super('VehiclesDatabase');
    this.version(1).stores({
      vehicles: 'id, level, icons, nation, type, *tags, localization',
    });
  }
}

export const db = new VehiclesDexie();
