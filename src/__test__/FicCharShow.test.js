import { render, screen } from '@testing-library/react';
import FicCharShow from '../pages/FicCharShow';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import mockFicChars from '../mockFicChars';

  const renderShow = () => {
    render(
      <MemoryRouter initialEntries={["/ficharshow/1"]}>
        <Routes>
        <Route path="/ficharshow/:id" element={<FicCharShow ficChars={mockFicChars} />} />
        </Routes>
      </MemoryRouter>
    )
  }

describe("<FicCharShow />", () => {
    it("has an image (with enjoys description ", () => {
      renderShow()
        const enjoys = screen.getByRole('heading', {
          name: /prison mike likes eating gruel/i
        })
        expect(enjoys).toBeInTheDocument()
    })
  })

  