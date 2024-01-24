import React from 'react';
import { Button, CardBody, CardImg } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import './Content.css';

function Content(props) {

    function handleclick(id) {
        props.onDelete(props.id);
    }

  return (
    <div style={{display: "inline-block"}} className='Content'>
        {/* <img src={props.path} alt={props.alt} />
        <button onClick={handleclick}>Delete</button> */}
        <Card>
            <CardImg variant='top' src={props.path} />
            <CardBody>
                <Button onClick={handleclick}>Delete</Button>
            </CardBody>
        </Card>
    </div>
  )
}

export default Content;