import { animated, useSpring } from '@react-spring/web';
import { useState } from 'react';

import { usePremiumVehicleQuery } from '../../hooks/indexedDb/usePremiumVehicleQuery';
import { useVehicleQuery } from '../../hooks/indexedDb/useVehicleQuery';
import { useVehicleTypesQuery } from '../../hooks/reactQuery/useVehicleTypesQuery';
import { MEDIA_PATH } from '../../utils/constants';
import { NationName, VehicleType, VehicleTypeName } from '../../utils/types';
import { LocalText } from '../LocalText';
import { StylingWrapper } from './StylingWrapper';
import { VehicleTypeBranch } from './VehicleTypeBranch';

interface Props {
  nation: NationName;
}

export const NationTree: React.FC<Props> = ({ nation }) => {
  const vehicles = useVehicleQuery({ nation });
  const premiumVehicles = usePremiumVehicleQuery({ nation });
  const { data } = useVehicleTypesQuery();
  const [active, setActive] = useState<VehicleTypeName | 'Premium'>();
  const [props, api] = useSpring(
    () => ({
      from: { opacity: 0 },
      to: { opacity: 1 },
    }),
    [],
  );

  if (!vehicles || !data || !premiumVehicles) {
    return null;
  }

  const handleMouseOver = (t: VehicleTypeName | 'Premium') => {
    setActive(t);
  };

  const handleMouseOut = () => {
    setActive(undefined);
  };

  const vehicleTypesPairs: [VehicleTypeName, VehicleType][] = Object.keys(data).map((key) => [
    key as VehicleTypeName,
    data[key as VehicleTypeName],
  ]);

  return (
    <div className="flex justify-center">
      {vehicleTypesPairs.map(([typeName, vehicleType]) => {
        const line = vehicles[typeName];
        if (!line) {
          return null;
        }
        return (
          <div key={typeName}>
            <div
              onMouseOver={() => handleMouseOver(typeName)}
              onMouseOut={() => handleMouseOut()}
              className="flex pl-3 align-middle h-[40px] items-center sticky top-0 z-50"
            >
              <img src={`${MEDIA_PATH}${vehicleType.icons.default}`} />
              <p className="text-white pl-1 cursor-pointer">
                <LocalText>{vehicleType.localization.mark}</LocalText>
              </p>
            </div>

            <StylingWrapper
              isActive={active === typeName}
              isNonActive={active !== undefined && active !== typeName}
            >
              <VehicleTypeBranch line={line} />
            </StylingWrapper>
          </div>
        );
      })}
      <div>
        <div
          onMouseOver={() => handleMouseOver('Premium')}
          onMouseOut={() => handleMouseOut()}
          className="flex pl-5 align-middle h-[40px] items-center sticky top-0 z-50"
        >
          <p className="text-amber-400 cursor-pointer">
            <span>Premium</span>
          </p>
        </div>

        <StylingWrapper
          isActive={active === 'Premium'}
          isNonActive={active !== undefined && active !== 'Premium'}
        >
          <VehicleTypeBranch line={premiumVehicles} />
        </StylingWrapper>
      </div>
    </div>
  );
};
