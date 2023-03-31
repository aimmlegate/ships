import { useLiveQuery } from 'dexie-react-hooks';
import { groupBy } from 'lodash';

import { db } from '../../utils/db';
import { Vehicle, VehicleTable, VehicleTypeName } from '../../utils/types';
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
      .and((v) => {
        const requiredTags = ['buyable'];
        const excludedTags = ['catalogueHidden', 'premium', 'uiPremium'];

        return (
          v.tags.some((tag) => requiredTags.includes(tag)) &&
          v.tags.every((tag) => !excludedTags.includes(tag))
        );
      })
      .sortBy('level');
    return groupBy(vehicles, 'type');
  }, [nation]);
}
