import { CARD_WIDTH } from "../../constants";
import { Vehicle } from "../../types";
import { LevelView } from "./LevelView";

interface Props {
  vehicle: Vehicle;
}

export const ShipView: React.FC<Props> = ({ vehicle }) => {
  return (
    <div className={`border border-gray-300 text-center h-[100%] w-[${CARD_WIDTH}px] mr-4`}>
      <LevelView>{vehicle.level}</LevelView>
      <p>{vehicle.type}</p>
      <p>{vehicle.localization.mark?.en ?? vehicle.name}</p>
      <p>{vehicle.nation}</p>
    </div>
  );
};
