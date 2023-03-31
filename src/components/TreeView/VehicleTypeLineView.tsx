import { groupBy } from "lodash";
import { useState } from "react";
import { TIERS } from "../../constants";
import { Vehicle } from "../../types";
import { VehicleTierView } from "./VehicleTierView";

interface Props {
  line?: Vehicle[];
  lineName: string;
}

export const VehicleTypeLineView: React.FC<Props> = ({ line, lineName }) => {
  const [isActive, setActive] = useState(false);

  const handleMouseOver = () => {
    setActive(true);
  };

  const handleMouseOut = () => {
    setActive(false);
  };

  if (!line) {
    return null;
  }
  const groupedByLevel = groupBy(line, "level");
  const rows = [...Array(TIERS).keys()];

  return (
    <div>
      <p onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        {lineName}
      </p>
      <div
        className={`flex flex-col space-y-4 mr-4 ml-4 ${
          isActive ? "text-slate-100" : "text-slate-500"
        }`}
      >
        {rows.map((row) => (
          <div key={row} className="flex space-x-4">
            <div key={`${row}`} className="flex flex-1 h-[80px]">
              <VehicleTierView tier={groupedByLevel[row + 1]} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
