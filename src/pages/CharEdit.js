import React, { useState } from "react"
import {Form, FormGroup, Label, Input, Button} from 'reactstrap'
import { useNavigate, useParams } from "react-router-dom"

const CharEdit = ({ chars, updateChar }) => {
    const { id } = useParams()
        let currentChar = chars?.find((char) => char.id === +id)
        
        const [editChar, setEditChar] = useState({
            name: currentChar.name,
        age: currentChar.age,
        enjoys: currentChar.enjoys,
        image: currentChar.image
        }) 

        const handleChange = (e) => {
            setEditChar({...editChar, [e.target.name]: e.target.value})
        }

        const navigate = useNavigate()
            const handleSubmit = () => {
            updateChar(editChar, currentChar.id)
            navigate("/charindex")
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

export default CharEdit