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
      .and((v) => {
        const requiredTags = ['buyable', 'premium', 'uiPremium'];
        const excludedTags = ['catalogueHidden'];

        return (
          v.tags.some((tag) => requiredTags.includes(tag)) &&
          v.tags.every((tag) => !excludedTags.includes(tag))
        );
      })
      .sortBy('level');
    return vehicles;
  }, [nation]);
}
