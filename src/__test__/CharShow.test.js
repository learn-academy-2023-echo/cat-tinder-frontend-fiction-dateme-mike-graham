import { render, screen } from '@testing-library/react';
import CharShow from '../pages/CharShow';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import mockChars from '../mockChars';

  const renderShow = () => {
    render(
      <MemoryRouter initialEntries={["/charshow/1"]}>
        <Routes>
        <Route path="/charshow/:id" element={<CharShow chars={mockChars} />} />
        </Routes>
      </MemoryRouter>
    )
  }

describe("<CharShow />", () => {
    it("has an image (with enjoys description ", () => {
      renderShow()
        const enjoys = screen.getByRole('heading', {
          name: /prison mike likes eating gruel/i
        })
        expect(enjoys).toBeInTheDocument()
    })
  })

  