import { useState, type SubmitEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, ArrowLeft } from 'lucide-react';
import { PrimaryButton } from '../../../../shared/components/PrimaryButton';
import LanguageSelector from '../../../../shared/components/LanguageSelector';

type FieldProps = {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  type?: 'text' | 'email' | 'password';
};

const RegisterField = ({
  id,
  label,
  placeholder,
  value,
  onChange,
  type = 'text',
}: FieldProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';
  const inputType = isPassword && showPassword ? 'text' : type;

  return (
    <div className="flex flex-col gap-0.5">
      <label
        htmlFor={id}
        className="text-[#acb5bb] text-xs font-medium leading-relaxed tracking-tight cursor-pointer"
      >
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          type={inputType}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          required
          className="block w-full px-6 py-4 text-sm text-[#1a1c1e] bg-white border border-[#dce4e8] rounded-[15px] focus:ring-2 focus:ring-[#3DD598] focus:border-transparent outline-none transition-all placeholder:text-[#acb5bb] cursor-text"
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 pr-5 flex items-center text-gray-400 hover:text-gray-600 cursor-pointer"
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
          </button>
        )}
      </div>
    </div>
  );
};

const RegisterForm = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ fullName, email, password });
  };

  return (
    <div className="flex-1 flex flex-col bg-[#f4f4f7] lg:bg-white p-4 md:p-8 relative">
      <div className="hidden lg:block absolute top-6 right-6 z-10">
        <LanguageSelector />
      </div>

      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-md bg-white lg:bg-transparent rounded-2xl lg:rounded-none shadow-lg lg:shadow-none p-8 lg:p-0">
          <button
            type="button"
            onClick={() => navigate('/login')}
            className="mb-6 flex items-center text-gray-700 hover:text-[#3DD598] transition-colors cursor-pointer"
            aria-label="Go back"
          >
            <ArrowLeft className="h-6 w-6" />
          </button>

          <div className="text-center mb-8">
            <h2 className="text-[#1a1c1e] text-2xl md:text-3xl font-bold tracking-tight mb-3">
              {t('register.title')}
            </h2>
            <p className="text-[#6c7278] text-sm font-semibold tracking-tight">
              {t('register.subtitle')}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5 md:gap-6">
            <RegisterField
              id="fullName"
              label={t('register.fullName.label')}
              placeholder={t('register.fullName.placeholder')}
              value={fullName}
              onChange={setFullName}
              type="text"
            />

            <RegisterField
              id="email"
              label={t('register.email.label')}
              placeholder={t('register.email.placeholder')}
              value={email}
              onChange={setEmail}
              type="email"
            />

            <RegisterField
              id="password"
              label={t('register.password.label')}
              placeholder={t('register.password.placeholder')}
              value={password}
              onChange={setPassword}
              type="password"
            />

            <PrimaryButton type="submit" className="mt-2 rounded-[14px] cursor-pointer">
              {t('register.button')}
            </PrimaryButton>

            <div className="text-center text-sm font-semibold">
              <span className="text-gray-600">{t('register.hasAccount')}</span>
              <button
                type="button"
                onClick={() => navigate('/login')}
                className="text-[#3DD598] hover:text-invora-primary-hover cursor-pointer"
              >
                {t('register.login')}
              </button>
            </div>
          </form>
        </div>
      </div>

      <p className="text-center text-gray-500 text-xs pb-2">{t('copyright')}</p>
    </div>
  );
};

export default RegisterForm;
