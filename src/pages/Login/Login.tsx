import LoginLeftPanel from './components/LoginLeftPanel'
import LoginMobileHeader from './components/LoginMobileHeader'
import LoginForm from './components/LoginForm'

const Login = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <LoginMobileHeader />
      <LoginLeftPanel />
      <LoginForm />
    </div>
  )
}

export default Login
