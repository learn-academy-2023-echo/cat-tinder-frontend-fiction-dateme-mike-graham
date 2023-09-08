import { render, screen } from '@testing-library/react';
import FicCharIndex from '../pages/FicCharIndex'
import { BrowserRouter } from 'react-router-dom';
import mockFicChars from '../mockFicChars';

describe("<FicCharIndex />", () => {
  it ("renders profile cards", () => {
   
    render(
      <BrowserRouter>
        <FicCharIndex ficChars={mockFicChars}/>, 
      </BrowserRouter>
    )
    mockFicChars.forEach(ficChar => {
      const ficCharName = screen.getByText(ficChar.name)
      expect(ficCharName).toBeInTheDocument()
    })
  })
})