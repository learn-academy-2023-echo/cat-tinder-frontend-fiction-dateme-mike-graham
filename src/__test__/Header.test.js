import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header'

describe("<Header />", () => {
  it("has text and links", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
   
    const text = screen.getByRole('link', {
      name: /add a new profile/i
    })
    expect(text).toBeInTheDocument()
  })
})