import { LocalizationData } from "../../types";

interface Props {
  children?: LocalizationData;
  lang?: string;
  className?: string;
}

export const LocalText: React.FC<Props> = ({
  children,
  className,
  lang = "en",
}) => {
  if (!children) {
    return <span className={className}>#no-translation</span>;
  }
  return <span className={className}>{children[lang]}</span>;
};
