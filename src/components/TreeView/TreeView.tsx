import React, { useState } from "react";
import { useNationsQuery } from "../../hooks/useNationsQuery";
import { Nation, NationName } from "../../types";
import { Layout } from "../Layout/Layout";
import { NationView } from "./NationView";

interface Props {
  nations: Nation[];
}

const NationSwitcher: React.FC<Props> = ({ nations }) => {
  const [nation, setNation] = useState<NationName>(nations[0].name);

  const handleSwitch = (n: NationName) => {
    setNation(n);
    window.scrollTo({ top: 0, left: 0 });
  };
  return (
    <Layout
      sidebar={
        <div className="flex flex-col">
          {nations.map((nation) => (
            <button
              key={nation.id}
              onClick={() => handleSwitch(nation.name)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4 mb-4"
            >
              {nation.name}
            </button>
          ))}
        </div>
      }
      content={<NationView nation={nation} />}
    />
  );
};

export const TreeView = () => {
  const nations = useNationsQuery();

  if (!nations) {
    return null;
  }

  return <NationSwitcher nations={nations} />;
};
