import RegisterLeftPanel from './components/RegisterLeftPanel'
import RegisterMobileHeader from './components/RegisterMobileHeader'
import RegisterForm from './components/RegisterForm'

const Register = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <RegisterMobileHeader />
      <RegisterLeftPanel />
      <RegisterForm />
    </div>
  )
}

export default Register
