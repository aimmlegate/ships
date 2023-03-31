import React, { useState } from "react";
import { useNationsQuery } from "../../hooks/useNationsQuery";
import { Nation, NationName } from "../../types";
import { Layout } from "../Layout/Layout";
import { NationsMenu } from "../NationsMenu/NationsMenu";
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
        <NationsMenu
          active={nation}
          nations={nations}
          handleSwitch={handleSwitch}
        />
      }
      content={<NationView nation={nation} />}
    />
  );
};

export const TreeView = () => {
  const { data } = useNationsQuery();

  if (!data) {
    return null;
  }

  return <NationSwitcher nations={data} />;
};
