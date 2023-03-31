import React from "react";
import { MEDIA_PATH } from "../../constants";
import { VehicleIconUrls } from "../../types";

interface Props {
  children?: VehicleIconUrls;
  type?: string;
  alt?: string;
  className?: string;
}

export const VehicleIcon: React.FC<Props> = ({
  children,
  type = "default",
  alt,
  className,
}) => {
  if (!children) {
    return null;
  }
  return (
    <img
      alt={alt}
      className={className}
      src={`${MEDIA_PATH}${children[type]}`}
    />
  );
};
