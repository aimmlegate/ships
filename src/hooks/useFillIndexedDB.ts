import { useState, useEffect } from "react";
import { NATIONS_PATH, VEHICLES_PATH, VEHICLES_TYPES_PATH } from "../constants";
import { db } from "../db";

export function useFillIndexedDB(): { loading: boolean; error: string } {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [vehicles, nations, vehiclesTypes] = await Promise.all([
          fetch(VEHICLES_PATH).then((response) => response.json()),
          fetch(NATIONS_PATH).then((response) => response.json()),
          fetch(VEHICLES_TYPES_PATH).then((response) => response.json()),
        ]);

        const vehiclesArray = Object.entries(vehicles.data).map(
          ([id, value]: any) => {
            return { id, type: value.tags[0], ...value };
          }
        );
        const nationsArray = Object.entries(nations.data).map(
          ([id, value]: any) => {
            return { id, ...value };
          }
        );
        const vehiclesTypesArray = Object.entries(vehiclesTypes.data).map(
          ([id, value]: any) => {
            return { id, ...value };
          }
        );

        await Promise.all([
          await db.vehicles.bulkAdd(vehiclesArray),
          await db.nations.bulkAdd(nationsArray),
          await db.vehiclesTypes.bulkAdd(vehiclesTypesArray),
        ]);
      } catch (error) {
        setError(`Error fetching data: ${error}`);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { error, loading };
}
