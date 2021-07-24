import { render, screen } from '@testing-library/react'
import React from 'react'

import Page from './Page'

test('renders learn react link', () => {
  render(<Page />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
