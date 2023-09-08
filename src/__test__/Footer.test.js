import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Footer from '../components/Footer'

describe("<Footer />", () => {
  it("has text", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    )
   
      const footer = screen.getByText(/© mike & graham/i)
      expect(footer).toBeInTheDocument()
  })
})