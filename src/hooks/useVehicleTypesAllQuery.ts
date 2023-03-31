import { useLiveQuery } from "dexie-react-hooks";

import { db } from "../db";
import { VehicleType } from "../types";

export function useVehicleTypesAllQuery(): VehicleType[] | undefined {
  return useLiveQuery(async () => {
    const vehiclesTypes = (await db.vehiclesTypes.toArray()).sort(
      (a, b) => a.sort_order - b.sort_order
    );
    return vehiclesTypes;
  }, []);
}
