import { useVehicleTypesQuery } from "../../hooks/useVehicleTypesQuery";
import { Vehicle, VehicleTable, VehicleType } from "../../types";
import { LocalText } from "../LocalText/LocalText";
import { VehicleIcon } from "../VehicleIcon/VehicleIcon";
import { VehicleTypeIcon } from "../VehicleTypeIcon/VehicleTypeIcon";
import { LevelView } from "./LevelView";

interface Props {
  vehicle: VehicleTable;
}

export const ShipView: React.FC<Props> = ({ vehicle }) => {
  const { data } = useVehicleTypesQuery();
  if (!data) {
    return null;
  }
  const isPremium = vehicle.tags.includes("uiPremium");
  const vehicleType = data[vehicle.type];
  return (
    <div className="cursor-pointer border h-[100%] w-[160px] mr-4 flex flex-col justify-between p-1 overflow-hidden relative hover:bg-gradient-to-t from-slate-500 to-transparent hover:border-slate-100">
      <div
        className={`font-medium flex items-center z-10 ${
          isPremium ? "text-amber-400" : "text-white"
        }`}
      >
        <VehicleTypeIcon type={isPremium ? "premium" : "default"}>
          {vehicleType?.icons}
        </VehicleTypeIcon>
        <LevelView className="pl-1">{vehicle.level}</LevelView>
      </div>
      <VehicleIcon
        className="absolute left-0 bottom-1 h-[70px] z-0"
        type="default"
      >
        {vehicle.icons}
      </VehicleIcon>
      <div
        className={`text-right font-medium uppercase z-10 ${
          isPremium ? "text-amber-400" : "text-white"
        }`}
      >
        <LocalText>{vehicle.localization.shortmark}</LocalText>
      </div>
    </div>
  );
};
