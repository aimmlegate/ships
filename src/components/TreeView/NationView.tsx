import { usePremiumVehicleQuery } from "../../hooks/usePremiumVehicleQuery";
import { useVehicleQuery } from "../../hooks/useVehicleQuery";
import { useVehicleTypesQuery } from "../../hooks/useVehicleTypesQuery";
import { NationName, VehicleType, VehicleTypeName } from "../../types";
import { VehicleTypeLineView } from "./VehicleTypeLineView";

interface Props {
  nation: NationName;
}

export const NationView: React.FC<Props> = ({ nation }) => {
  const vehicles = useVehicleQuery({ nation });
  const premiumVehicles = usePremiumVehicleQuery({ nation });
  const { data } = useVehicleTypesQuery();

  if (!vehicles || !data || !premiumVehicles) {
    return null;
  }

  const vehicleTypesPairs: [VehicleTypeName, VehicleType][] = Object.keys(
    data
  ).map((key) => [key as VehicleTypeName, data[key as VehicleTypeName]]);

  return (
    <>
      {vehicleTypesPairs.map(([typeName, vehicleType]) => (
        <VehicleTypeLineView
          key={typeName}
          line={vehicles[typeName]}
          lineName={vehicleType.localization.mark?.en ?? vehicleType.name}
        />
      ))}

      <VehicleTypeLineView line={premiumVehicles} lineName={"Premium"} />
    </>
  );
};
