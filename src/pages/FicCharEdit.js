import React, { useState } from "react"
import {Form, FormGroup, Label, Input, Button} from 'reactstrap'
import { useNavigate, useParams } from "react-router-dom"

const FicCharEdit = ({ ficChars, updateFicChar }) => {
    const { id } = useParams()
        let currentFicChar = ficChars?.find((ficChar) => ficChar.id === +id)
        
        const [editFicChar, setEditFicChar] = useState({
            name: currentFicChar.name,
        age: currentFicChar.age,
        enjoys: currentFicChar.enjoys,
        image: currentFicChar.image
        }) 

        const handleChange = (e) => {
            setEditFicChar({...editFicChar, [e.target.name]: e.target.value})
        }

        const navigate = useNavigate()
            const handleSubmit = () => {
            updateFicChar(editFicChar, currentFicChar.id)
            navigate("/ficCharindex")
}

return (
<Form>
  <FormGroup>
    <Label for="name">Name</Label>
    <Input type="text" name="name" onChange={handleChange} />
  </FormGroup>
  <FormGroup>
    <Label for="age">Age</Label>
    <Input type="number" name="age" onChange={handleChange} />
  </FormGroup>
  <FormGroup>
    <Label for="enjoys">Enjoys</Label>
    <Input type="text" name="enjoys" onChange={handleChange} />
  </FormGroup>
  <FormGroup>
    <Label for="image">Image URL</Label>
    <Input type="text" name="image" onChange={handleChange} />
  </FormGroup>
  <Button onClick= {handleSubmit} name="Submit"> 
        Submit Profile Updates
    </Button>
</Form>
)}

export default FicCharEdit