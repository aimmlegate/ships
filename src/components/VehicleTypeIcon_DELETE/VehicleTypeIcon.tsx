import React from "react";
import { MEDIA_PATH } from "../../constants";
import { VehicleTypeIconType, VehicleTypeIconUrls } from "../../types";

interface Props {
  children?: VehicleTypeIconUrls;
  type?: VehicleTypeIconType;
}

export const VehicleTypeIcon: React.FC<Props> = ({
  children,
  type = "default",
}) => {
  if (!children) {
    return null;
  }
  return <img src={`${MEDIA_PATH}${children[type]}`} />;
};
