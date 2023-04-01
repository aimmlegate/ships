import { useLiveQuery } from 'dexie-react-hooks';
import { groupBy } from 'lodash';

import { db } from '../../utils/db';
import { NationName, VehicleTable, VehicleTypeName } from '../../utils/types';

interface UseVehicleQuery {
  nation: NationName;
}

export type GroupedVehicles = Partial<
  Record<VehicleTypeName | 'Premium', Record<number, VehicleTable[]>>
>;

export function useVehiclesQueryByNation({ nation }: UseVehicleQuery): GroupedVehicles | undefined {
  return useLiveQuery(async () => {
    const allVehicles = await db.vehicles
      .where({ nation })
      .and((v) => v.tags.includes('buyable') && !v.tags.includes('catalogueHidden'))
      .sortBy('level');

    const premium = allVehicles.filter((v) =>
      v.tags.some((tag) => tag === 'premium' || tag === 'uiPremium'),
    );
    const nonPremium = allVehicles.filter(
      (v) => !v.tags.some((tag) => tag === 'premium' || tag === 'uiPremium'),
    );

    const groupedByType = groupBy(nonPremium, 'type');

    const groupedByLevel = Object.keys(groupedByType).reduce(
      (acc, key) => ({ ...acc, [key]: groupBy(groupedByType[key], 'level') }),
      {},
    );

    return {
      ...groupedByLevel,
      Premium: groupBy(premium, 'level'),
    };
  }, [nation]);
}
