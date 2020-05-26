import React, {useState} from 'react';
import {Carousel,Modal,Button} from 'react-bootstrap'
import {Form} from 'semantic-ui-react'

import {useSelector} from 'react-redux'



function UploadModal(props){
  
    const [file, setFile] = useState({})
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  


    const user =  useSelector(state => state.user)
    const id = props.id

    const submit = () =>{

    const form = new FormData()
    form.append("image", file)
    form.append("user", user.id)
    form.append("id", id)
    
    fetch("http://e7webend.herokuapp.com/ownerships", {
      method: "POST",
      body: form
    })
    .then(r => {
      if(!r.ok){
        alert('You did not submit a valid image link!')
        throw r
      }
      return r.json()})
    .then(obj => console.log(obj))

    handleClose()
  }


  return (
      <>
            <Button onClick={handleShow} style={{marginLeft: "15px", marginBottom: "10px"}}>Upload!</Button>           
            <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
              <Modal.Title>Upload a build!</Modal.Title>
            </Modal.Header>
            <Form>
            <Form.Field style={{width: "250px", margin: "auto"}}>
            <label>URL</label>
            <input type="file" onChange={(e)=>setFile(e.target.files[0]) } placeholder='URL' />
            </Form.Field>
            </Form>
            <Modal.Footer>
              <Button onClick={submit} variant="secondary" >
                Submit
              </Button>
            </Modal.Footer>
          </Modal> 
    </>
  )
}

export default UploadModal