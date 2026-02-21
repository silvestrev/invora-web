import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { TextInput } from '../TextInput'

describe('TextInput', () => {
  const setup = () => {
    const handleChange = vi.fn()
    const renderResult = render(
      <TextInput
        id="test-input"
        type="text"
        label="Name"
        placeholder="Enter name"
        value=""
        onChange={handleChange}
      />,
    )
    return { ...renderResult, handleChange }
  }

  it('should render the label', () => {
    const { getByText } = setup()
    expect(getByText('Name')).toBeInTheDocument()
  })

  it('should render the input with the given placeholder', () => {
    const { getByPlaceholderText } = setup()
    expect(getByPlaceholderText('Enter name')).toBeInTheDocument()
  })

  it('should call onChange with the typed value', async () => {
    const handleChange = vi.fn()
    const { getByLabelText } = render(
      <TextInput
        id="test-input"
        type="text"
        label="Name"
        placeholder="Enter name"
        value=""
        onChange={handleChange}
      />,
    )
    await userEvent.type(getByLabelText('Name'), 'Hello')
    expect(handleChange).toHaveBeenCalled()
  })

  it('should render an icon for type="email"', () => {
    const { container } = render(
      <TextInput
        id="email"
        type="email"
        label="Email"
        placeholder="email@example.com"
        value=""
        onChange={vi.fn()}
      />,
    )
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('should render an icon for type="password"', () => {
    const { container } = render(
      <TextInput
        id="password"
        type="password"
        label="Password"
        placeholder="••••••••"
        value=""
        onChange={vi.fn()}
      />,
    )
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('should show the password toggle button when showPasswordToggle is true', () => {
    const { getByRole } = render(
      <TextInput
        id="password"
        type="password"
        label="Password"
        placeholder="••••••••"
        value=""
        onChange={vi.fn()}
        showPasswordToggle
      />,
    )
    expect(getByRole('button', { name: /show password/i })).toBeInTheDocument()
  })

  it('should not show the toggle button when showPasswordToggle is false', () => {
    const { queryByRole } = render(
      <TextInput
        id="password"
        type="password"
        label="Password"
        placeholder="••••••••"
        value=""
        onChange={vi.fn()}
      />,
    )
    expect(queryByRole('button')).not.toBeInTheDocument()
  })

  it('should toggle password visibility when toggle button is clicked', async () => {
    const { getByRole, getByLabelText } = render(
      <TextInput
        id="password"
        type="password"
        label="Password"
        placeholder="••••••••"
        value=""
        onChange={vi.fn()}
        showPasswordToggle
      />,
    )
    const input = getByLabelText('Password')
    expect(input).toHaveAttribute('type', 'password')

    await userEvent.click(getByRole('button', { name: /show password/i }))
    expect(input).toHaveAttribute('type', 'text')

    await userEvent.click(getByRole('button', { name: /hide password/i }))
    expect(input).toHaveAttribute('type', 'password')
  })
})
