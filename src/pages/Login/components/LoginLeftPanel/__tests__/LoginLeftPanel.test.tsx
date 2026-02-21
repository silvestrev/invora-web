import { render } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../../../../i18n';
import LoginLeftPanel from '../LoginLeftPanel';

beforeEach(async () => {
  await i18n.changeLanguage('en-US');
});

describe('LoginLeftPanel', () => {
  const setup = () => {
    const renderResult = render(
      <I18nextProvider i18n={i18n}>
        <LoginLeftPanel />
      </I18nextProvider>,
    );
    return renderResult;
  };

  it('should render the Invora brand name', () => {
    const { getByText } = setup();
    expect(getByText('Invora')).toBeInTheDocument();
  });

  it('should render the panel title', () => {
    const { getByText } = setup();
    expect(getByText('Empower your investment journey.')).toBeInTheDocument();
  });

  it('should render the panel subtitle', () => {
    const { getByText } = setup();
    expect(getByText(/track, organize, and visualize/i)).toBeInTheDocument();
  });
});
