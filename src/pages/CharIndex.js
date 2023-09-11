import React from "react"
import {Card, CardBody, CardTitle, CardSubtitle, Button} from "reactstrap"
import { NavLink } from "react-router-dom";
const CharIndex = ({ chars }) => {
    
        return (
            <>
              {chars.map((char, index) => {
                return (
                  <Card
                    style={{
                      width: "18rem",
                    }}
                  key={index}>
                    <img alt="Profile image" src={char.image}/>
                    <CardBody>
                      <CardTitle tag="h5">{char.name}</CardTitle>
                      <CardSubtitle className="mb-2 text-muted" tag="h6">
                        {char.age}
                      </CardSubtitle>
                      <Button>
                        <NavLink to={`/charshow/${char.id}`}> 
                        Profile details
                        </NavLink>
                      </Button>
                    </CardBody>
                  </Card>
                );
              })}
            </>
          );
        };


export default CharIndex