import { useTranslation } from 'react-i18next'
import AuthMobileHeader from '../../shared/components/AuthMobileHeader'
import RegisterLeftPanel from './components/RegisterLeftPanel'
import RegisterForm from './components/RegisterForm'

const Register = () => {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <AuthMobileHeader subtitle={t('registerLeftPanel.subtitle')} />
      <RegisterLeftPanel />
      <RegisterForm />
    </div>
  )
}

export default Register
