'use client';

import LanguageIcon from '@mui/icons-material/Language';
import { IconButton, Tooltip, keyframes } from '@mui/material';
// Internal
import { useLocale } from "@/context/Localecontext";

const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(31, 204, 214, 0.7); }
  70% { box-shadow: 0 0 0 10px rgba(31, 204, 214, 0); }
  100% { box-shadow: 0 0 0 0 rgba(31, 204, 214, 0); }
`;

export default function FloatingLanguageSwitcher() {
  const { locale, setLocale, t } = useLocale();

  return (
    <Tooltip title={t("language.change", { item: locale === 'es' ? t('language.spanish') : t('language.english') })}>
      <IconButton
        onClick={() => setLocale(locale === "en" ? "es" : "en")}
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          zIndex: 1300,
          background: 'linear-gradient(45deg, #5D87FF, #4570EA, #5D87FF)',
          color: 'white',
          width: 56,
          height: 56,
          borderRadius: '50%',
          animation: `${pulse} 2.5s infinite`,
          transition: 'background 0.3s ease, box-shadow 0.3s ease',
          boxShadow: '0 4px 10px rgba(31, 204, 214, 0.6)',
          '&:hover': {
            background: 'linear-gradient(45deg, #4570EA, #5D87FF, #4570EA)'
          },
        }}
        aria-label={`Change language to ${locale === "en" ? "Spanish" : "English"}`}
      >
        <LanguageIcon />
      </IconButton>
    </Tooltip>
  );
}
