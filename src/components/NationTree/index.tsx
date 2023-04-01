import { useVehiclesQueryByNation } from '../../hooks/indexedDb/useVehiclesQueryByNation';
import { useVehicleTypesQuery } from '../../hooks/reactQuery/useVehicleTypesQuery';
import { NationName, VehicleType, VehicleTypeName } from '../../utils/types';
import { NationTreeStyling } from './NationTreeStyling';

interface Props {
  nation: NationName;
}

export const NationTree: React.FC<Props> = ({ nation }) => {
  const vehicles = useVehiclesQueryByNation({ nation });
  const { data: vehiclesTypes } = useVehicleTypesQuery();

  if (!vehicles || !vehiclesTypes) {
    return null;
  }

  const vehicleTypesPairs: [VehicleTypeName, VehicleType][] = Object.keys(vehiclesTypes).map(
    (key) => [key as VehicleTypeName, vehiclesTypes[key as VehicleTypeName]],
  );

  return <NationTreeStyling nation={nation} vehicleTypesPairs={vehicleTypesPairs} vehicles={vehicles} />;
};
