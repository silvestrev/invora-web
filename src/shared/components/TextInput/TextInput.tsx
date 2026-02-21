import { useState } from 'react'
import { User, Lock, Eye, EyeOff } from 'lucide-react'

type TextInputProps = {
  id: string
  type: 'text' | 'email' | 'password'
  label: string
  placeholder: string
  value: string
  onChange: (value: string) => void
  required?: boolean
  showPasswordToggle?: boolean
}

export const TextInput = ({
  id,
  type,
  label,
  placeholder,
  value,
  onChange,
  required = true,
  showPasswordToggle = false,
}: TextInputProps) => {
  const [showPassword, setShowPassword] = useState(false)
  const isPassword = type === 'password'
  const inputType = isPassword && showPasswordToggle && showPassword ? 'text' : type
  const showToggle = isPassword && showPasswordToggle

  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mb-2 cursor-pointer"
      >
        {label}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 md:pl-4 flex items-center pointer-events-none">
          {type === 'email' ? (
            <User className="h-5 w-5 text-gray-400" />
          ) : isPassword ? (
            <Lock className="h-5 w-5 text-gray-400" />
          ) : null}
        </div>
        <input
          id={id}
          type={inputType}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`block w-full pl-10 md:pl-12 pr-3 md:pr-4 py-2.5 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3DD598] focus:border-transparent outline-none transition-all ${showToggle ? 'pr-10 md:pr-12' : ''}`}
          required={required}
        />
        {showToggle && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 pr-3 md:pr-4 flex items-center text-gray-400 hover:text-gray-600 cursor-pointer"
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
          </button>
        )}
      </div>
    </div>
  )
}
