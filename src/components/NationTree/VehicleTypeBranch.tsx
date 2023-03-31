import { groupBy } from "lodash";
import { TIERS } from "../../constants";
import { VehicleTable } from "../../types";
import { VehicleTierDisplay } from "./VehicleTierDisplay";

interface Props {
  line: VehicleTable[];
}

export const VehicleTypeBranch: React.FC<Props> = ({ line }) => {
  const groupedByLevel = groupBy(line, "level");
  const rows = [...Array(TIERS).keys()];

  return (
    <>
      {rows.map((row) => (
        <div key={row} className="flex space-x-4">
          <div key={`${row}`} className="flex flex-1 h-[80px]">
            <VehicleTierDisplay tier={groupedByLevel[row + 1]} />
          </div>
        </div>
      ))}
    </>
  );
};
