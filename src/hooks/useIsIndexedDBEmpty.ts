import { useLiveQuery } from "dexie-react-hooks";

import { db } from "../db";

export function useIsIndexedDBEmpty(): boolean | undefined {
  return useLiveQuery(async () => {
    const vehiclesCount = await db.vehicles.count();
    const nationsCount = await db.nations.count();
    const vehiclesTypesCount = await db.vehiclesTypes.count();

    return (
      vehiclesCount === 0 || nationsCount === 0 || vehiclesTypesCount === 0
    );
  }, []);
}
