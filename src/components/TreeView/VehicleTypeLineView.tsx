import { groupBy } from "lodash";
import { useState } from "react";
import { TIERS } from "../../constants";
import { Vehicle, VehicleTable } from "../../types";
import { VehicleTierView } from "./VehicleTierView";

interface Props {
  line: VehicleTable[];
}

export const VehicleTypeLineView: React.FC<Props> = ({ line }) => {
  const groupedByLevel = groupBy(line, "level");
  const rows = [...Array(TIERS).keys()];

  return (
    <>
      {rows.map((row) => (
        <div key={row} className="flex space-x-4">
          <div key={`${row}`} className="flex flex-1 h-[80px]">
            <VehicleTierView tier={groupedByLevel[row + 1]} />
          </div>
        </div>
      ))}
    </>
  );
};
