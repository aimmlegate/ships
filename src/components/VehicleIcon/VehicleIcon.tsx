import React from "react";
import { MEDIA_PATH } from "../../constants";
import { VehicleIconUrls } from "../../types";

interface Props {
  children?: VehicleIconUrls;
  type?: string;
  className?: string;
}

export const VehicleIcon: React.FC<Props> = ({
  children,
  type = "default",
  className
}) => {
  if (!children) {
    return null;
  }
  return <img className={className} src={`${MEDIA_PATH}${children[type]}`} />;
};
