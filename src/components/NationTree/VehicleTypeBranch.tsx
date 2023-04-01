import { TIERS } from '../../utils/constants';
import { VehicleTable } from '../../utils/types';
import { VehicleTierDisplay } from './VehicleTierDisplay';

interface Props {
  line: Record<number, VehicleTable[]>;
}

export const VehicleTypeBranch: React.FC<Props> = ({ line }) => {
  const rows = [...Array(TIERS).keys()];

  return (
    <>
      {rows.map((row) => (
        <div key={row} className="flex space-x-4">
          <div key={`${row}`} className="flex flex-1 h-[80px]">
            <VehicleTierDisplay tier={line[row + 1]} />
          </div>
        </div>
      ))}
    </>
  );
};
