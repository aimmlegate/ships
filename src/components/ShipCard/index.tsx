import Tippy from '@tippyjs/react/headless';

import { MEDIA_PATH } from '../../constants';
import { useVehicleTypesQuery } from '../../hooks/reactQuery/useVehicleTypesQuery';
import { VehicleTable } from '../../types';
import { LevelIndicator } from '../LevelIndicator';
import { LocalText } from '../LocalText';
import { ShipDetailsCard } from './ShipDetailsCard';

interface Props {
  vehicle: VehicleTable;
}

export const ShipCard: React.FC<Props> = ({ vehicle }) => {
  const { data } = useVehicleTypesQuery();
  if (!data) {
    return null;
  }
  const isPremium = vehicle.tags.includes('uiPremium');
  const vehicleType = data[vehicle.type];
  const iconUrlType = isPremium ? 'premium' : 'default';
  return (
    <Tippy
      placement="right"
      render={() => (
        <ShipDetailsCard vehicle={vehicle} vehicleType={vehicleType} nation={vehicle.nation} />
      )}
    >
      <div
        data-tooltip-place="right"
        id={vehicle.name}
        className="cursor-pointer transition-all ease-in-out border h-[100%] w-[160px] mr-4 flex flex-col justify-between p-1 overflow-hidden relative hover:bg-gradient-to-t from-slate-500 to-transparent hover:border-slate-100"
      >
        <div
          className={`font-medium flex items-center z-10 ${
            isPremium ? 'text-amber-400' : 'text-white'
          }`}
        >
          <img src={`${MEDIA_PATH}${vehicleType.icons[iconUrlType]}`} />
          <LevelIndicator className="pl-1 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            {vehicle.level}
          </LevelIndicator>
        </div>
        <img
          alt={vehicle.name}
          className="absolute left-0 bottom-1 h-[70px] z-0"
          src={`${MEDIA_PATH}${vehicle.icons.default}`}
        />
        <div
          className={`text-right font-medium uppercase z-10 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] ${
            isPremium ? 'text-amber-400' : 'text-white'
          }`}
        >
          <LocalText>{vehicle.localization.shortmark}</LocalText>
        </div>
      </div>
    </Tippy>
  );
};
