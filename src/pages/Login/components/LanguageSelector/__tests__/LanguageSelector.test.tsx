import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../../../../i18n';
import LanguageSelector from '../LanguageSelector';

describe('LanguageSelector', () => {
  const setup = () => {
    const renderResult = render(
      <I18nextProvider i18n={i18n}>
        <LanguageSelector />
      </I18nextProvider>,
    );
    return renderResult;
  };

  it('should render PT-BR and EN buttons', () => {
    const { getByRole } = setup();
    expect(getByRole('button', { name: 'PT-BR' })).toBeInTheDocument();
    expect(getByRole('button', { name: 'EN' })).toBeInTheDocument();
  });

  it('should render the separator between buttons', () => {
    const { container } = setup();
    expect(container.querySelector('.w-px')).toBeInTheDocument();
  });

  it('should highlight the active language button', async () => {
    await i18n.changeLanguage('pt-BR');
    const { getByRole } = setup();
    expect(getByRole('button', { name: 'PT-BR' })).toHaveClass('bg-[#3DD598]');
    expect(getByRole('button', { name: 'EN' })).not.toHaveClass('bg-[#3DD598]');
  });

  it('should change language to EN when EN button is clicked', async () => {
    await i18n.changeLanguage('pt-BR');
    const { getByRole } = setup();
    await userEvent.click(getByRole('button', { name: 'EN' }));
    expect(getByRole('button', { name: 'EN' })).toHaveClass('bg-[#3DD598]');
    expect(getByRole('button', { name: 'PT-BR' })).not.toHaveClass('bg-[#3DD598]');
  });

  it('should change language to PT-BR when PT-BR button is clicked', async () => {
    await i18n.changeLanguage('en-US');
    const { getByRole } = setup();
    await userEvent.click(getByRole('button', { name: 'PT-BR' }));
    expect(getByRole('button', { name: 'PT-BR' })).toHaveClass('bg-[#3DD598]');
    expect(getByRole('button', { name: 'EN' })).not.toHaveClass('bg-[#3DD598]');
  });
});
