import { render } from '@testing-library/react'
import { describe, it, expect, beforeEach } from 'vitest'
import { I18nextProvider } from 'react-i18next'
import i18n from '../../../../../i18n'
import RegisterLeftPanel from '../RegisterLeftPanel'

beforeEach(async () => {
  await i18n.changeLanguage('en-US')
})

describe('RegisterLeftPanel', () => {
  const setup = () => {
    const renderResult = render(
      <I18nextProvider i18n={i18n}>
        <RegisterLeftPanel />
      </I18nextProvider>,
    )
    return renderResult
  }

  it('should render the Invora brand name', () => {
    const { getByText } = setup()
    expect(getByText('Invora')).toBeInTheDocument()
  })

  it('should render the subtitle in English', () => {
    const { getByText } = setup()
    expect(
      getByText('Take control of your portfolio and make smart financial decisions.'),
    ).toBeInTheDocument()
  })

  it('should render the subtitle in Portuguese when language is pt-BR', async () => {
    await i18n.changeLanguage('pt-BR')
    const { getByText } = setup()
    expect(
      getByText(
        'Assuma o comando da sua carteira e tome decisões financeiras inteligentes.',
      ),
    ).toBeInTheDocument()
  })
})
