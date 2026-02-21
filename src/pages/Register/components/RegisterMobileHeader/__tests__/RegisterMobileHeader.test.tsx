import { render } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { I18nextProvider } from 'react-i18next'
import i18n from '../../../../../i18n'
import RegisterMobileHeader from '../RegisterMobileHeader'

vi.mock('../../../../../shared/components/LanguageSelector', () => ({
  default: () => null,
}))

beforeEach(async () => {
  await i18n.changeLanguage('en-US')
})

describe('RegisterMobileHeader', () => {
  const setup = () => {
    const renderResult = render(
      <I18nextProvider i18n={i18n}>
        <RegisterMobileHeader />
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
    expect(getByText('Empower your investment journey.')).toBeInTheDocument()
  })
})
