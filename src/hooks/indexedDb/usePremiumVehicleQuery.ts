import { useLiveQuery } from 'dexie-react-hooks';

import { db } from '../../db';
import { NationName } from '../../types';

interface UsePremiumVehicleQuery {
  nation: NationName;
}

export function usePremiumVehicleQuery({ nation }: UsePremiumVehicleQuery) {
  return useLiveQuery(async () => {
    const vehicles = await db.vehicles
      .where({ nation })
      .and((v) => v.tags.includes('buyable'))
      .and((v) => v.tags.some((tag) => tag === 'premium' || tag === 'uiPremium'))
      .and((v) => !v.tags.includes('catalogueHidden'))
      .sortBy('level');
    return vehicles;
  }, [nation]);
}
