import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'pt-BR', label: 'PT-BR' },
  { code: 'en-US', label: 'EN' },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  return (
    <div className="flex items-center">
      {languages.map(({ code, label }, index) => {
        const isActive = i18n.language === code;
        return (
          <div key={code} className="flex items-center">
            {index > 0 && <span className="w-px h-4 bg-gray-500 mx-2" />}
            <button
              type="button"
              onClick={() => i18n.changeLanguage(code)}
              className={`cursor-pointer text-sm font-semibold px-3 py-1.5 rounded-lg transition-colors focus:outline-none ${isActive ? 'bg-[#3DD598] text-white' : 'text-gray-400 hover:text-[#3DD598]'}`}
            >
              {label}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default LanguageSelector;
