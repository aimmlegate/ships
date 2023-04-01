import { Language } from '../../utils/types';
import { useLanguage } from '../LanguageContext';

export const languageMap: Map<Language, string> = new Map([
  [Language.ru, 'Русский'],
  [Language.fr, 'Français'],
  [Language.en, 'English'],
  [Language.nl, 'Nederlands'],
  [Language.uk, 'Українська'],
  [Language.pt_br, 'Português do Brasil'],
  [Language.zh_cn, '简体中文'],
  [Language.tr, 'Türkçe'],
  [Language.de, 'Deutsch'],
  [Language.ko, '한국어'],
  [Language.it, 'Italiano'],
  [Language.pl, 'Polski'],
  [Language.th, 'ไทย'],
  [Language.cs, 'Čeština'],
  [Language.es_mx, 'Español (México)'],
  [Language.zh_sg, '简体中文（新加坡）'],
  [Language.ja, '日本語'],
  [Language.es, 'Español'],
  [Language.zh_tw, '繁體中文'],
]);

export const LanguageSelect = () => {
  const { language, setLanguage } = useLanguage();
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value as Language);
  };

  return (
    <select
      className="px-3 py-2 border rounded-md text-white bg-slate-700 border-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
      value={language}
      onChange={handleChange}
    >
      {Array.from(languageMap.entries()).map(([key, value]) => (
        <option key={key} value={key}>
          {value}
        </option>
      ))}
    </select>
  );
};
