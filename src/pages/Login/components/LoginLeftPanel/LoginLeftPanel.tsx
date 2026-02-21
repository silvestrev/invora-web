import { useTranslation } from 'react-i18next';

const LoginLeftPanel = () => {
  const { t } = useTranslation();

  return (
    <div className="hidden lg:flex lg:w-1/2 bg-[#1A1C1E] flex-col p-12">
      <h1 className="text-white text-3xl font-bold mb-16">Invora</h1>

      <div className="max-w-md">
        <h2 className="text-white text-4xl font-bold leading-tight mb-6">
          {t('leftPanel.title')}
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed">{t('leftPanel.subtitle')}</p>
      </div>
    </div>
  );
};

export default LoginLeftPanel;
