import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../db";
import { Nation } from "../types";

export function useNationsQuery(): Nation[] | undefined {
  return useLiveQuery(async () => {
    const nations = (await db.nations.toArray())
      .filter((n) => n.tags.includes("inTree"))
      .filter((n) => !n.tags.includes("hidden"))
      .sort((a, b) => a.id - b.id);
    return nations;
  }, []);
}
