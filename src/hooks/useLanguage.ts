import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const useLanguage = () => {
  const { i18n } = useTranslation();

  const currentLang = i18n.language || 'en';
  const isRTL = currentLang === 'ar';

  const toggleLanguage = () => {
    const newLang = currentLang === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLang;
    document.body.style.fontFamily = isRTL ? "'Cairo', sans-serif" : "'Inter', sans-serif";
  }, [currentLang, isRTL]);

  return { currentLang, isRTL, toggleLanguage };
};
