import { useLiveQuery } from "dexie-react-hooks";

import { db } from "../db";

export function useIsIndexedDBEmpty(): boolean | undefined {
  return useLiveQuery(async () => {
    const vehiclesCount = await db.vehicles.count();

    return vehiclesCount === 0;
  }, []);
}
