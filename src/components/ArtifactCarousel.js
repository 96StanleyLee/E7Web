import React, {useState, useEffect} from 'react';
import {Carousel,Modal,Button} from 'react-bootstrap'
import {Image} from 'semantic-ui-react'



function ArtifactsCarousel(props){

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  

    const suggestion = props.suggestion

  return (
      <>
            <Image src={suggestion.image} onClick={handleShow} alt="First slide" style={{height: "400px", marginLeft:"40px"}}/>
            <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
              <Modal.Title>{suggestion.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{suggestion.description}</Modal.Body>
            <Modal.Body>{suggestion.skill_description}</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal> 
    </>
  )
}

export default ArtifactsCarousel