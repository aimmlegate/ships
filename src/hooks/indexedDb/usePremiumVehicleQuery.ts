import { useLiveQuery } from 'dexie-react-hooks';

import { db } from '../../utils/db';
import { NationName } from '../../utils/types';

interface UsePremiumVehicleQuery {
  nation: NationName;
}

export function usePremiumVehicleQuery({ nation }: UsePremiumVehicleQuery) {
  return useLiveQuery(async () => {
    const vehicles = await db.vehicles
      .where({ nation })
      .and((v) => v.tags.includes('buyable'))
      .and((v) => v.tags.includes('premium'))
      .and((v) => v.tags.includes('uiPremium'))
      .and((v) => !v.tags.includes('catalogueHidden'))
      .sortBy('level');

    return vehicles;
  }, [nation]);
}
