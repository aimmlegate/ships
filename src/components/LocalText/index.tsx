import { LocalizationData } from '../../utils/types';
import { useLanguage } from '../LanguageContext';

interface Props {
  children?: LocalizationData;
  className?: string;
}

export const LocalText: React.FC<Props> = ({ children, className }) => {
  const { language } = useLanguage();

  if (!children || !language) {
    return <span className={className}>#no-translation</span>;
  }

  return <span className={className}>{children[language]}</span>;
};
