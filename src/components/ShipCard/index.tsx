import cx from 'classnames';

import { useVehicleTypesQuery } from '../../hooks/reactQuery/useVehicleTypesQuery';
import { MEDIA_PATH } from '../../utils/constants';
import { VehicleTable } from '../../utils/types';
import { LevelIndicator } from '../LevelIndicator';
import { LocalText } from '../LocalText';
import { Popover } from './Popover';
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
    <Popover
      referenceNode={
        <div className="fade-in cursor-pointer transition-all ease-in-out border h-[100%] w-[160px] mr-4 flex flex-col justify-between p-1 overflow-hidden relative hover:bg-gradient-to-t from-slate-500 to-transparent hover:border-slate-100">
          <div
            className={cx('font-medium flex items-center z-10', {
              'text-amber-400': isPremium,
              'text-white': !isPremium,
            })}
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
            className={cx(
              'text-right font-medium uppercase z-10 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]',
              {
                'text-amber-400': isPremium,
                'text-white': !isPremium,
              },
            )}
          >
            <LocalText>{vehicle.localization.shortmark}</LocalText>
          </div>
        </div>
      }
      floatingNode={
        <ShipDetailsCard vehicle={vehicle} vehicleType={vehicleType} nation={vehicle.nation} />
      }
    />
  );
};
