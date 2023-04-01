import { useLiveQuery } from 'dexie-react-hooks';
import { groupBy } from 'lodash';

import { db } from '../../utils/db';
import { VehicleTable, VehicleTypeName } from '../../utils/types';
import { NationName } from '../../utils/types';

interface UseVehicleQuery {
  nation: NationName;
}

export function useVehicleQuery({
  nation,
}: UseVehicleQuery): Partial<Record<VehicleTypeName, VehicleTable[]>> | undefined {
  return useLiveQuery(async () => {
    const vehicles = await db.vehicles
      .where({ nation })
      .and((v) => v.tags.includes('buyable'))
      .and((v) => !v.tags.includes('catalogueHidden'))
      .and((v) => !v.tags.includes('premium'))
      .and((v) => !v.tags.includes('uiPremium'))
      .sortBy('level');

    return groupBy(vehicles, 'type');
  }, [nation]);
}
