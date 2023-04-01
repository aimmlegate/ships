import { useState } from 'react';

import { GroupedVehicles } from '../../hooks/indexedDb/useVehiclesQueryByNation';
import { MEDIA_PATH } from '../../utils/constants';
import { NationName, VehicleType, VehicleTypeName } from '../../utils/types';
import { LocalText } from '../LocalText';
import { LineHeader } from './LineHeader';
import { VehicleTypeBranch } from './VehicleTypeBranch';
import { VehicleTypeBranchStyling } from './VehicleTypeBranchStyling';

interface Props {
  vehicleTypesPairs: [VehicleTypeName, VehicleType][];
  vehicles: GroupedVehicles;
  nation: NationName;
}

export const NationTreeStyling: React.FC<Props> = ({ vehicleTypesPairs, vehicles, nation }) => {
  const [active, setActive] = useState<VehicleTypeName | 'Premium'>();

  const handleMouseOver = (t: VehicleTypeName | 'Premium') => {
    setActive(t);
  };

  const handleMouseOut = () => {
    setActive(undefined);
  };

  return (
    <div className="flex justify-center">
      {vehicleTypesPairs.map(([typeName, vehicleType]) => {
        const line = vehicles[typeName];
        if (!line) {
          return null;
        }
        return (
          <div key={typeName}>
            <LineHeader
              handleMouseOver={() => handleMouseOver(typeName)}
              handleMouseOut={() => handleMouseOut()}
            >
              <img src={`${MEDIA_PATH}${vehicleType.icons.default}`} />
              <p className="text-white pl-1 cursor-pointer test">
                <LocalText>{vehicleType.localization.mark}</LocalText>
              </p>
            </LineHeader>

            <VehicleTypeBranchStyling
              isActive={active === typeName}
              isNonActive={active !== undefined && active !== typeName}
            >
              <VehicleTypeBranch line={line} />
            </VehicleTypeBranchStyling>
          </div>
        );
      })}
      {vehicles.Premium && (
        <div>
          <LineHeader
            handleMouseOver={() => handleMouseOver('Premium')}
            handleMouseOut={() => handleMouseOut()}
          >
            <p className="text-amber-400 cursor-pointer pl-2 test">
              <span>Premium</span>
            </p>
          </LineHeader>

          <VehicleTypeBranchStyling
            isActive={active === 'Premium'}
            isNonActive={active !== undefined && active !== 'Premium'}
          >
            <VehicleTypeBranch line={vehicles.Premium} />
          </VehicleTypeBranchStyling>
        </div>
      )}
    </div>
  );
};
