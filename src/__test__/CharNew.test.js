import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CharNew from '../pages/CharNew';

describe("<CharNew />", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <CharNew />
      </BrowserRouter>
    )
  })
  
  it("renders the forms for our user", () => {
    const formName = screen.getByText("Name:")
    expect(formName).toBeInTheDocument()

    const formAge = screen.getByText("Age:")
    expect(formAge).toBeInTheDocument()

    const formE = screen.getByText("Enjoys:")
    expect(formE).toBeInTheDocument()

    const formI = screen.getByText("Image:")
    expect(formI).toBeInTheDocument()

  })
 

})