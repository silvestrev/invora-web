import LanguageSelector from '../LanguageSelector'

type AuthMobileHeaderProps = {
  subtitle: string
}

const AuthMobileHeader = ({ subtitle }: AuthMobileHeaderProps) => {
  return (
    <div className="lg:hidden bg-[#1a1c1e] px-6 py-8">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-white text-2xl font-bold">Invora</h1>
        <LanguageSelector />
      </div>
      <h2 className="text-white text-xl font-semibold leading-tight text-center">
        {subtitle}
      </h2>
    </div>
  )
}

export default AuthMobileHeader
