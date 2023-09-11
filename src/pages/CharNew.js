import React, {useState} from "react"
import { useNavigate } from "react-router-dom"
import {Form, FormGroup, Label, Input, Button} from 'reactstrap'

const CharNew = ({createChar}) => {

    const [newFicChar, setNewFicChar] = useState({
        name: "",
        age: "",
        enjoys: "",
        image: ""
    })

    const navigate = useNavigate()

    const handleChange = (e) => {
        setNewFicChar({...newFicChar, [e.target.name]: e.target.value})
    }

    const handleSubmit = () => {
        createChar(newFicChar)
        navigate("/charindex")
    }
    
    return (
        <>
          <h2>Create a Profile!</h2>
          <Form>
            <FormGroup>
              <Label for="name">
                Name:
              </Label>
              <Input
                id="name"
                name="name"
                placeholder="What is your name?"
                type="text"
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="age">
                Age:
              </Label>
              <Input
                id="age"
                name="age"
                placeholder="What is your age?"
                type="number"
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="enjoys">
                Enjoys:
              </Label>
              <Input
                id="enjoys"
                name="enjoys"
                placeholder="What do you enjoy?"
                type="text"
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="image">
                Image:
              </Label>
              <Input
                id="image"
                name="image"
                placeholder="What is your image?"
                type="url"
                onChange={handleChange}
              />
            </FormGroup>
            <Button onClick={handleSubmit}>
              Submit
            </Button>
          </Form>
        </>
      )
    }

    export default CharNew