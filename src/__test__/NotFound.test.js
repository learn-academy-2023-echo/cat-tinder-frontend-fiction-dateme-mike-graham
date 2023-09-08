import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NotFound from '../pages/NotFound'

describe("<NotFound />", () => {
  it("has text", () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    )
    
    const text = screen.getByRole('alert')
    expect(text).toBeInTheDocument()
  })
})