import { useTranslation } from 'react-i18next'
import AuthMobileHeader from '../../shared/components/AuthMobileHeader'
import LoginLeftPanel from './components/LoginLeftPanel'
import LoginForm from './components/LoginForm'

const Login = () => {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <AuthMobileHeader subtitle={t('mobileHeader.title')} />
      <LoginLeftPanel />
      <LoginForm />
    </div>
  )
}

export default Login
