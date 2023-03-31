import { useLiveQuery } from "dexie-react-hooks";

import { db } from "../db";
import { VehicleType, VehicleTypeName } from "../types";

interface UseVehicleTypesQuery {
  type: VehicleTypeName;
}

export function useVehicleTypesQuery({
  type,
}: UseVehicleTypesQuery): VehicleType | undefined {
  return useLiveQuery(async () => {
    const [vehiclesType] = await db.vehiclesTypes.where({ id: type }).toArray();
    return vehiclesType;
  }, [type]);
}
