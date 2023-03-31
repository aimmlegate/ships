import { useNationsQuery } from "../../hooks/reactQuery/useNationsQuery";
import { NationSelector } from "../NationSelector";


export const Root = () => {
  const { data } = useNationsQuery();

  if (!data) {
    return null;
  }

  return <NationSelector nations={data} />;
};

