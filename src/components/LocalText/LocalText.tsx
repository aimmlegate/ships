import { LocalizationData } from "../../types";

interface Props {
  children?: LocalizationData;
  lang?: string;
}

export const LocalText: React.FC<Props> = ({ children, lang = "en" }) => {
  if (!children) {
    return <span>#no-translation</span>;
  }
  return <span>{children[lang]}</span>;
};
