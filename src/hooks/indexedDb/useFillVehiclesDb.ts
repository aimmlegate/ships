import { useEffect, useState } from 'react';

import { API } from '../../utils/api';
import { db } from '../../utils/db';
import { VehicleTable, VehicleTypeName } from '../../utils/types';

export function useFillVehiclesDb(): { loading: boolean; error: string } {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await API.fetchVehicles();

        const vehiclesArray: VehicleTable[] = Object.entries(data).map(([id, value]) => {
          return {
            id,
            type: value.tags[0] as VehicleTypeName,
            ...value,
          };
        });

        await db.vehicles.bulkAdd(vehiclesArray);
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
