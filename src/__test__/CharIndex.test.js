import { render, screen } from '@testing-library/react';
import CharIndex from '../pages/CharIndex'
import { BrowserRouter } from 'react-router-dom';
import mockChars from '../mockChars';

describe("<CharIndex />", () => {
  it ("renders profile cards", () => {
   
    render(
      <BrowserRouter>
        <CharIndex chars={mockChars}/>, 
      </BrowserRouter>
    )
    mockChars.forEach(char => {
      const charName = screen.getByText(char.name)
      expect(charName).toBeInTheDocument()
    })
  })
})