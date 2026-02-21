import { useTranslation } from 'react-i18next';

const RegisterLeftPanel = () => {
  const { t } = useTranslation();

  return (
    <div className="hidden lg:flex lg:w-1/2 flex-col items-center justify-center min-h-screen bg-[#1a1c1e]">
      <div className="text-center px-12">
        <h1 className="text-white text-5xl font-bold mb-6">Invora</h1>
        <p className="text-[#acb5bb] text-lg leading-relaxed max-w-sm mx-auto">
          {t('registerLeftPanel.subtitle')}
        </p>
      </div>
    </div>
  );
};

export default RegisterLeftPanel;
