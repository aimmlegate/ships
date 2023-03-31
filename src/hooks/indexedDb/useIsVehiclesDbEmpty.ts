import { useLiveQuery } from "dexie-react-hooks";

import { db } from "../../db";

export function useIsVehiclesDbEmpty(): boolean | undefined {
  return useLiveQuery(async () => {
    const vehiclesCount = await db.vehicles.count();

    return vehiclesCount === 0;
  }, []);
}
