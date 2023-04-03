import React, { ReactNode, createContext, useContext, useState } from 'react';

import { Language } from '../../utils/types';

interface LanguageContextValue {
  language?: Language;
  setLanguage: (language: Language) => void;
}

export const LanguageContext = createContext<LanguageContextValue>({
  setLanguage: () => void {},
  language: Language.en,
});

interface Props {
  children: ReactNode;
}

const initialValue = Language.en;

export const LanguageProvider: React.FC<Props> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem('language');
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value: Language) => {
    try {
      setLanguage(value);
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('language', JSON.stringify(value));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleLanguageChange = (selectedLanguage: Language) => {
    setValue(selectedLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleLanguageChange }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  return { language, setLanguage };
};
