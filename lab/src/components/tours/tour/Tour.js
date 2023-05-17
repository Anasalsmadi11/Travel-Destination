import './Tour.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import Image from 'react-bootstrap/Image';
import { useState } from 'react'
function Tour(props){

// console.log(props.arrayData[1].name)
console.log(props.city.image)
    return(
        <>
           <div>

           <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.image} />
      {/* <Image src={props.city.image} roundedCircle /> */}
      <Card.Body>
        <Card.Title>{props.city.name}</Card.Title>
        <Card.Text>
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
            {/* <img src={props.city.name}/>
            <h3>{props.city.name}</h3> */}
           </div>

        </>
    )

    
}
export default Tour;