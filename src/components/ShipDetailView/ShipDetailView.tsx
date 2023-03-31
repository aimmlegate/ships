import React from "react";
import { MEDIA_PATH } from "../../constants";
import { useNationsQuery } from "../../hooks/useNationsQuery";
import { NationName, VehicleTable, VehicleType } from "../../types";
import { LevelView } from "../LevelView/LevelView";
import { LocalText } from "../LocalText/LocalText";

interface Props {
  vehicle: VehicleTable;
  vehicleType: VehicleType;
  nation: NationName;
}

export const ShipDetailView: React.FC<Props> = ({
  vehicle,
  vehicleType,
  nation,
}) => {
  const { data } = useNationsQuery();
  if (!data) {
    return null;
  }
  const currentNation = data.find((n) => n.name === nation);
  const isPremium = vehicle.tags.some(
    (tag) => tag === "premium" || tag === "uiPremium"
  );
  return (
    <div className="border border-slate-500 bg-gray-900 w-[250px] z-10">
      <div className="h-[150px] relative  border-b border-slate-700">
        <div
          className={`flex items-center  uppercase font-medium relative z-10 p-1 ${
            isPremium ? "text-amber-400" : "text-white"
          }`}
        >
          <img
            className="pr-1"
            src={`${MEDIA_PATH}${
              isPremium ? vehicleType.icons.premium : vehicleType.icons.default
            }`}
          />
          <LevelView className="pr-1 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            {vehicle.level}
          </LevelView>
          <LocalText className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            {vehicle.localization.mark}
          </LocalText>
        </div>

        {currentNation && (
          <img
            className="absolute top-0"
            src={`${MEDIA_PATH}${currentNation.icons.large}`}
          />
        )}
        <img
          className="absolute top-0 left-0 right-0 bottom-0 m-auto w-[180px]"
          src={`${MEDIA_PATH}${vehicle.icons.medium}`}
        />
      </div>
      <div className="text-white p-3 text-xs">
        <LocalText>{vehicle.localization.description}</LocalText>
      </div>
    </div>
  );
};
