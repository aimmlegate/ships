import {  VehicleTable } from "../../types";
import { ShipView } from "../ShipView/ShipView";

type PropsVehicleTier = {
  tier?: VehicleTable[];
};

export const VehicleTierView: React.FC<PropsVehicleTier> = ({ tier }) => {
  if (!tier) {
    return null;
  }
  return (
    <div className="flex flex-1">
      {tier.map((vehicle) => (
        <ShipView key={vehicle.id} vehicle={vehicle} />
      ))}
    </div>
  );
};
