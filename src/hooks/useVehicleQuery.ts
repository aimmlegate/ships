import { Vehicle, VehicleTypeName } from "../types";
import { useLiveQuery } from "dexie-react-hooks";
import { groupBy } from "lodash";
import { db } from "../db";
import { NationName } from "../types";

interface UseVehicleQuery {
  nation: NationName;
}

export function useVehicleQuery({
  nation,
}: UseVehicleQuery): Partial<Record<VehicleTypeName, Vehicle[]>> | undefined {
  return useLiveQuery(async () => {
    const vehicles = await db.vehicles
      .where({ nation })
      .and((v) => v.tags.includes("buyable"))
      .and((v) => !v.tags.includes("catalogueHidden"))
      .and((v) => !v.tags.includes("premium"))
      .sortBy("level");
    return groupBy(vehicles, "type");
  }, [nation]);
}
