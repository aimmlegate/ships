import { groupBy } from "lodash";
import { CARD_HEIGHT, TIERS } from "../../constants";
import { Vehicle, VehicleType } from "../../types";
import { VehicleTierView } from "./VehicleTierView";

interface Props {
  line: Vehicle[] | undefined;
  lineName: string;
}

export const VehicleTypeLineView: React.FC<Props> = ({ line, lineName }) => {
  if (!line) {
    return null;
  }
  const groupedByLevel = groupBy(line, "level");
  const rows = [...Array(TIERS).keys()];

  return (
    <div>
      <p>{lineName}</p>
      <div className="flex flex-col space-y-4 mr-4 ml-4">
        {rows.map((row) => (
          <div key={row} className="flex space-x-4">
            <div key={`${row}`} className={`flex flex-1 h-[${CARD_HEIGHT}px]`}>
              <VehicleTierView tier={groupedByLevel[row + 1]} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
