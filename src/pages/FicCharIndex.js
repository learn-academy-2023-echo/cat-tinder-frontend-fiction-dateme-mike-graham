import React from "react"
import {Card, CardBody, CardTitle, CardSubtitle, Button} from "reactstrap"
import { NavLink } from "react-router-dom";
const FicCharIndex = ({ ficChars }) => {
    
        return (
            <>
              {ficChars.map((ficChar, index) => {
                return (
                  <Card
                    style={{
                      width: "18rem",
                    }}
                  key={index}>
                    <img alt="Profile image" src={ficChar.image}/>
                    <CardBody>
                      <CardTitle tag="h5">{ficChar.name}</CardTitle>
                      <CardSubtitle className="mb-2 text-muted" tag="h6">
                        {ficChar.age}
                      </CardSubtitle>
                      <Button>
                        <NavLink to={`/ficharshow/${ficChar.id}`}> 
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


export default FicCharIndex