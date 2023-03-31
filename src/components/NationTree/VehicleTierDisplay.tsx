import { VehicleTable } from '../../utils/types';
import { ShipCard } from '../ShipCard';

type Props = {
  tier?: VehicleTable[];
};

export const VehicleTierDisplay: React.FC<Props> = ({ tier }) => {
  if (!tier) {
    return null;
  }
  return (
    <div className="flex flex-1">
      {tier.map((vehicle) => (
        <ShipCard key={vehicle.id} vehicle={vehicle} />
      ))}
    </div>
  );
};
