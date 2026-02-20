import { render } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { I18nextProvider } from 'react-i18next'
import i18n from '../../../../../i18n'
import LoginMobileHeader from '../LoginMobileHeader'

vi.mock('../../LanguageSelector', () => ({ default: () => null }))

describe('LoginMobileHeader', () => {
  const setup = () => {
    const renderResult = render(
      <I18nextProvider i18n={i18n}>
        <LoginMobileHeader />
      </I18nextProvider>,
    )
    return renderResult
  }

  it('should render the Invora brand name', () => {
    const { getByText } = setup()
    expect(getByText('Invora')).toBeInTheDocument()
  })

  it('should render the header title', () => {
    const { getByText } = setup()
    expect(getByText('Potencialize sua jornada de investimentos.')).toBeInTheDocument()
  })
})
