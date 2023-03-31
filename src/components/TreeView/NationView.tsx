import { useState } from "react";
import { usePremiumVehicleQuery } from "../../hooks/usePremiumVehicleQuery";
import { useVehicleQuery } from "../../hooks/useVehicleQuery";
import { useVehicleTypesQuery } from "../../hooks/useVehicleTypesQuery";
import { NationName, VehicleType, VehicleTypeName } from "../../types";
import { LocalText } from "../LocalText/LocalText";
import { ShipDetailView } from "../ShipDetailView/ShipDetailView";
import { VehicleTypeIcon } from "../VehicleTypeIcon/VehicleTypeIcon";
import { VehicleTypeLineView } from "./VehicleTypeLineView";

interface Props {
  nation: NationName;
}

export const NationView: React.FC<Props> = ({ nation }) => {
  const vehicles = useVehicleQuery({ nation });
  const premiumVehicles = usePremiumVehicleQuery({ nation });
  const { data } = useVehicleTypesQuery();
  const [active, setActive] = useState<VehicleTypeName | "Premium">();

  if (!vehicles || !data || !premiumVehicles) {
    return null;
  }

  const handleMouseOver = (t: VehicleTypeName | "Premium") => {
    setActive(t);
  };

  const handleMouseOut = () => {
    setActive(undefined);
  };

  const vehicleTypesPairs: [VehicleTypeName, VehicleType][] = Object.keys(
    data
  ).map((key) => [key as VehicleTypeName, data[key as VehicleTypeName]]);

  return (
    <>
      {vehicleTypesPairs.map(([typeName, vehicleType]) => {
        const line = vehicles[typeName];
        if (!line) {
          return null;
        }
        return (
          <div key={typeName}>
            <div
              onMouseOver={() => handleMouseOver(typeName)}
              onMouseOut={() => handleMouseOut()}
              className="flex pl-3 align-middle h-[40px] items-center sticky top-0 z-50"
            >
              <VehicleTypeIcon>{vehicleType.icons}</VehicleTypeIcon>
              <p className="text-white pl-1">
                <LocalText>{vehicleType.localization.mark}</LocalText>
              </p>
            </div>

            <LineStylingWrapper
              isActive={active === typeName}
              isNonActive={active !== undefined && active !== typeName}
            >
              <VehicleTypeLineView line={line} />
            </LineStylingWrapper>
          </div>
        );
      })}
      <div>
        <div
          onMouseOver={() => handleMouseOver("Premium")}
          onMouseOut={() => handleMouseOut()}
          className="flex pl-5 align-middle h-[40px] items-center sticky top-0 z-50"
        >
          <p className="text-amber-400">
            <span>Premium</span>
          </p>
        </div>

        <LineStylingWrapper
          isActive={active === "Premium"}
          isNonActive={active !== undefined && active !== "Premium"}
        >
          <VehicleTypeLineView line={premiumVehicles} />
        </LineStylingWrapper>
      </div>
    </>
  );
};

interface PropsLineStylingWrapper {
  children: React.ReactNode;
  isActive?: boolean;
  isNonActive?: boolean;
}

const LineStylingWrapper: React.FC<PropsLineStylingWrapper> = ({
  children,
  isActive,
  isNonActive,
}) => {
  return (
    <div
      className={`flex flex-col space-y-4 mr-4 ml-4 transition-all ease-in pt-[40px] pb-[40px] ${
        isActive ? "text-slate-100" : "text-slate-500"
      } ${isNonActive ? "opacity-50" : ""}`}
    >
      {children}
    </div>
  );
};
