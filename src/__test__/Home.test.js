import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from '../pages/Home'

describe("<Home />", () => {
  it("has text", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )
   
    const text = screen.getByRole('heading', {
      name: /home page/i
    })
    expect(text).toBeInTheDocument()
  })
})
