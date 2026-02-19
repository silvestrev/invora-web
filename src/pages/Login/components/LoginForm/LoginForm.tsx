import { useState, type SubmitEvent } from 'react'
import { useTranslation } from 'react-i18next'
import LanguageSelector from '../LanguageSelector'
import { TextInput } from '../../../../shared/components/TextInput'
import { PrimaryButton } from '../../../../shared/components/PrimaryButton'

const LoginForm = () => {
  const { t } = useTranslation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log({ email, password, rememberMe })
  }

  return (
    <div className="flex-1 flex flex-col bg-white p-4 md:p-8 relative">
      <div className="hidden lg:block absolute top-6 right-6 z-10">
        <LanguageSelector />
      </div>

      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-md bg-white lg:bg-transparent rounded-2xl lg:rounded-none shadow-lg lg:shadow-none p-8 lg:p-0">
          <h2 className="text-gray-900 text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center pt-8 lg:pt-0">
            {t('login.title')}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
            <TextInput
              id="email"
              type="email"
              label={t('login.email.label')}
              placeholder={t('login.email.placeholder')}
              value={email}
              onChange={setEmail}
            />

            <TextInput
              id="password"
              type="password"
              label={t('login.password.label')}
              placeholder={t('login.password.placeholder')}
              value={password}
              onChange={setPassword}
              showPasswordToggle
            />

            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 text-[#3DD598] focus:ring-[#3DD598] border-gray-300 rounded cursor-pointer"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-700 cursor-pointer"
                >
                  {t('login.rememberMe')}
                </label>
              </div>
              <a
                href="#"
                className="text-sm text-[#3DD598] hover:text-invora-primary-hover font-medium"
              >
                {t('login.forgotPassword')}
              </a>
            </div>

            <PrimaryButton type="submit">{t('login.button')}</PrimaryButton>

            <div className="text-center text-sm">
              <span className="text-gray-600">{t('login.noAccount')}</span>
              <a
                href="#"
                className="text-[#3DD598] hover:text-invora-primary-hover font-semibold"
              >
                {t('login.register')}
              </a>
            </div>
          </form>
        </div>
      </div>

      <p className="text-center text-gray-500 text-xs pb-2">{t('copyright')}</p>
    </div>
  )
}

export default LoginForm
