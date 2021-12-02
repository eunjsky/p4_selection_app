import React from 'react';
import styles from './Selection.module.css'
import { Card, Button } from 'react-bootstrap'



const Selection = ({selection}) => {
    
    const {
        name, address, review, cuisines, description } = selection;
    
    
    // const onEdit = () => {};
    // const onDelete = () => {};

    return (
    <div style={{margin:"10px"}}>
        <Card >
        <Card.Header>Select One</Card.Header>
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
                <p>Address: {address}</p>
                <p>Review: {review}</p>
                <p>Cuisines: {cuisines}</p>
                <p>Description: {description}</p>
            </Card.Text>
            {/* <div style={{textAlign:'right'}}>
            <Button variant="primary" onClick={onEdit}>Edit</Button>&nbsp;&nbsp;
            <Button variant="primary" onClick={onDelete}>Delete</Button>
            </div> */}
        </Card.Body>
        </Card>
    </div>
    )
}
export default Selection;