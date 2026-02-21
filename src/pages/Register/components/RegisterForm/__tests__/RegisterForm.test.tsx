import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../../../../i18n';
import RegisterForm from '../RegisterForm';

vi.mock('../../../../../shared/components/LanguageSelector', () => ({
  default: () => null,
}));
vi.mock('react-router-dom', () => ({ useNavigate: () => vi.fn() }));

beforeEach(async () => {
  await i18n.changeLanguage('en-US');
});

describe('RegisterForm', () => {
  const setup = () => {
    const renderResult = render(
      <I18nextProvider i18n={i18n}>
        <RegisterForm />
      </I18nextProvider>,
    );
    return renderResult;
  };

  it('should render the register title', () => {
    const { getByText } = setup();
    expect(getByText('Create New Account')).toBeInTheDocument();
  });

  it('should render the register subtitle', () => {
    const { getByText } = setup();
    expect(
      getByText('Please register by filling in your personal data'),
    ).toBeInTheDocument();
  });

  it('should render the full name input', () => {
    const { getByLabelText } = setup();
    expect(getByLabelText('Full name')).toBeInTheDocument();
  });

  it('should render the email input', () => {
    const { getByLabelText } = setup();
    expect(getByLabelText('Email')).toBeInTheDocument();
  });

  it('should render the password input', () => {
    const { getByLabelText } = setup();
    expect(getByLabelText('Password')).toBeInTheDocument();
  });

  it('should render the submit button', () => {
    const { getByRole } = setup();
    expect(getByRole('button', { name: /continue/i })).toBeInTheDocument();
  });

  it('should render the back button', () => {
    const { getByRole } = setup();
    expect(getByRole('button', { name: /go back/i })).toBeInTheDocument();
  });

  it('should update the full name field when user types', async () => {
    const { getByLabelText } = setup();
    const fullNameInput = getByLabelText('Full name');
    await userEvent.type(fullNameInput, 'John Doe');
    expect(fullNameInput).toHaveValue('John Doe');
  });

  it('should update the email field when user types', async () => {
    const { getByLabelText } = setup();
    const emailInput = getByLabelText('Email');
    await userEvent.type(emailInput, 'john@email.com');
    expect(emailInput).toHaveValue('john@email.com');
  });

  it('should update the password field when user types', async () => {
    const { getByLabelText } = setup();
    const passwordInput = getByLabelText('Password');
    await userEvent.type(passwordInput, 'secret123');
    expect(passwordInput).toHaveValue('secret123');
  });

  it('should toggle password visibility when toggle button is clicked', async () => {
    const { getByLabelText, getByRole } = setup();
    const passwordInput = getByLabelText('Password');
    expect(passwordInput).toHaveAttribute('type', 'password');
    await userEvent.click(getByRole('button', { name: /show password/i }));
    expect(passwordInput).toHaveAttribute('type', 'text');
    await userEvent.click(getByRole('button', { name: /hide password/i }));
    expect(passwordInput).toHaveAttribute('type', 'password');
  });
});
