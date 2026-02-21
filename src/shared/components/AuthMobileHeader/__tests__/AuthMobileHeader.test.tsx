import { render } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { I18nextProvider } from 'react-i18next'
import i18n from '../../../../i18n'
import AuthMobileHeader from '../AuthMobileHeader'

vi.mock('../../LanguageSelector', () => ({ default: () => null }))

describe('AuthMobileHeader', () => {
  const setup = (subtitle: string) => {
    const renderResult = render(
      <I18nextProvider i18n={i18n}>
        <AuthMobileHeader subtitle={subtitle} />
      </I18nextProvider>,
    )
    return renderResult
  }

  it('should render the Invora brand name', () => {
    const { getByText } = setup('Any subtitle')
    expect(getByText('Invora')).toBeInTheDocument()
  })

  it('should render the subtitle passed as prop', () => {
    const { getByText } = setup('Empower your investment journey.')
    expect(getByText('Empower your investment journey.')).toBeInTheDocument()
  })

  it('should render a different subtitle when a different prop is passed', () => {
    const { getByText } = setup('Take control of your portfolio and make smart financial decisions.')
    expect(
      getByText('Take control of your portfolio and make smart financial decisions.'),
    ).toBeInTheDocument()
  })
})
