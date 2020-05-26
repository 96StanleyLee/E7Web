import React, {useState} from 'react';
import { Card, Image, Button, Header } from 'semantic-ui-react'
import styled from 'styled-components'
import {Modal} from 'react-bootstrap'




const StyledImage = styled.img`
  width: 303px;
  -webkit-transition: all 1s ease;
  transition: all 0.5s ease;

  :hover{
    -webkit-filter: brightness(145%);
    filter: brightness(1.45)
  }
`


function ArtifactCard(props){


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
    <Card style={{ borderRadius: "20px"}}>
    <StyledImage
          src={props.artifact.image}
          onClick={handleShow}
        />
      <Card.Content>
        <Card.Header textAlign={"center"}>{props.artifact.name}</Card.Header>
        <Card.Header textAlign={"center"}>{
        props.artifact.role !== "" ?
        props.artifact.role.charAt(0).toUpperCase() + props.artifact.role.slice(1): 'All Role'
        }</Card.Header>

      </Card.Content>
    </Card>

    <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{props.artifact.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.artifact.description}</Modal.Body>
        <Modal.Body>{props.artifact.skill_description}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default ArtifactCard






// const StyledImage = styled.img`
//   width: 303px;
//   -webkit-transition: all 1s ease;
//   transition: all 0.5s ease;

//   :hover{
//     -webkit-filter: brightness(145%);
//     filter: brightness(1.45)
//   }
// `