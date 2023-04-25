import './Tour.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react'
function Tour(props){

// console.log(props.arrayData[1].name)

    return(
        <>
           
           <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.city.image} />
                <Card.Body>
                    <Card.Title>{props.city.name}</Card.Title>
                    <Button variant="primary">Click a city!</Button>
                </Card.Body>
            </Card>

        </>
    )

    
}
export default Tour;