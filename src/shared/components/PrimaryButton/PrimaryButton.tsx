type PrimaryButtonProps = {
  type?: 'submit' | 'button'
  children: React.ReactNode
  className?: string
}

export const PrimaryButton = ({
  type = 'submit',
  children,
  className = '',
}: PrimaryButtonProps) => {
  return (
    <button
      type={type}
      className={`w-full bg-[#3DD598] text-white py-2.5 md:py-3 px-4 rounded-lg text-sm md:text-base font-semibold hover:bg-invora-primary-hover transition-colors focus:outline-none focus:ring-2 focus:ring-[#3DD598] focus:ring-offset-2 ${className}`.trim()}
    >
      {children}
    </button>
  )
}
