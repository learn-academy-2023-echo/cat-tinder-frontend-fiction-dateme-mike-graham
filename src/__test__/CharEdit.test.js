import { render, screen } from '@testing-library/react';
import CharEdit from '../pages/CharEdit'
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import mockChars from '../mockChars';

    const rendEdit = () => {
            render(
        <MemoryRouter initialEntries={["/charedit/1"]}>
            <Routes>
                <Route path="/charedit/:id" element={ <CharEdit chars={mockChars}/> } />
            </Routes>
        </MemoryRouter>
    )}
      
    describe("<CharEdit />", () => {

      it("renders the forms for our user", () => {
        rendEdit()
        const formAge = screen.getByRole('spinbutton')
        expect(formAge).toBeInTheDocument()
      })
    })
     
    