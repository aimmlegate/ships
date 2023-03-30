import { usePremiumVehicleQuery } from "../../hooks/usePremiumVehicleQuery";
import { useVehicleQuery } from "../../hooks/useVehicleQuery";
import { useVehicleTypesQuery } from "../../hooks/useVehicleTypesQuery";
import { NationName } from "../../types";
import { VehicleTypeLineView } from "./VehicleTypeLineView";

interface Props {
  nation: NationName;
}

export const NationView: React.FC<Props> = ({ nation }) => {
  const vehicles = useVehicleQuery({ nation });
  const premiumVehicles = usePremiumVehicleQuery({ nation });
  const vehicleTypes = useVehicleTypesQuery();

  if (!vehicles || !vehicleTypes || !premiumVehicles) {
    return null;
  }

  return (
    <>
      {vehicleTypes.map((vehicleType) => (
        <VehicleTypeLineView
          key={vehicleType.id}
          line={vehicles[vehicleType.id]}
          lineName={vehicleType.localization.mark?.en ?? vehicleType.name}
        />
      ))}
      <VehicleTypeLineView line={premiumVehicles} lineName={"Premium"} />
    </>
  );
};
