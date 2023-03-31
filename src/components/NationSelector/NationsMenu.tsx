import React from "react";
import { MEDIA_PATH } from "../../constants";
import { Nation, NationName } from "../../types";
import { LocalText } from "../LocalText";

interface Props {
  nations: Nation[];
  active: NationName;
  handleSwitch: (n: NationName) => void;
}

// TODO: check hovers

export const NationsMenu: React.FC<Props> = ({
  nations,
  handleSwitch,
  active,
}) => {
  return (
    <div className="flex flex-col">
      {nations.map((nation) => (
        <button
          key={nation.id}
          disabled={active === nation.name}
          onClick={() => handleSwitch(nation.name)}
          className={`flex items-center p-2 h-[40px] mb-1 nation-button-gradient hover:nation-button-gradient-hover ${
            active === nation.name ? "nation-button-gradient-active" : ""
          }`}
        >
          <img
            className="w-[35px] pr-2"
            alt={nation.name}
            src={`${MEDIA_PATH}${nation.icons.tiny}`}
          />
          <p
            className={`${
              active === nation.name ? "text-black" : "text-white"
            } font-medium uppercase`}
          >
            <LocalText>{nation.localization.mark}</LocalText>
          </p>
        </button>
      ))}
    </div>
  );
};