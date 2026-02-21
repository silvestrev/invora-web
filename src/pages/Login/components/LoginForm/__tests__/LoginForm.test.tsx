import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../../../../i18n';
import LoginForm from '../LoginForm';

vi.mock('../../LanguageSelector', () => ({ default: () => null }));
vi.mock('react-router-dom', () => ({ useNavigate: () => vi.fn() }));

beforeEach(async () => {
  await i18n.changeLanguage('en-US');
});

describe('LoginForm', () => {
  const setup = () => {
    const renderResult = render(
      <I18nextProvider i18n={i18n}>
        <LoginForm />
      </I18nextProvider>,
    );
    return renderResult;
  };

  it('should render the login title', () => {
    const { getByText } = setup();
    expect(getByText('Login first to your account')).toBeInTheDocument();
  });

  it('should render the email input', () => {
    const { getByLabelText } = setup();
    expect(getByLabelText('Email')).toBeInTheDocument();
  });

  it('should render the password input', () => {
    const { getByLabelText } = setup();
    expect(getByLabelText('Password')).toBeInTheDocument();
  });

  it('should render the remember me checkbox', () => {
    const { getByRole } = setup();
    expect(getByRole('checkbox', { name: /remember me/i })).toBeInTheDocument();
  });

  it('should render the forgot password link', () => {
    const { getByText } = setup();
    expect(getByText('Forgot Password')).toBeInTheDocument();
  });

  it('should render the submit button', () => {
    const { getByRole } = setup();
    expect(getByRole('button', { name: /login/i })).toBeInTheDocument();
  });

  it('should update the email field when user types', async () => {
    const { getByLabelText } = setup();
    const emailInput = getByLabelText('Email');
    await userEvent.type(emailInput, 'user@example.com');
    expect(emailInput).toHaveValue('user@example.com');
  });

  it('should update the password field when user types', async () => {
    const { getByLabelText } = setup();
    const passwordInput = getByLabelText('Password');
    await userEvent.type(passwordInput, 'secret123');
    expect(passwordInput).toHaveValue('secret123');
  });

  it('should toggle the remember me checkbox when clicked', async () => {
    const { getByRole } = setup();
    const checkbox = getByRole('checkbox', { name: /remember me/i });
    expect(checkbox).not.toBeChecked();
    await userEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });
});
