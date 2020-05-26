import React, {useState, useEffect} from 'react';
import {Modal,Button} from 'react-bootstrap'
import { useSelector } from 'react-redux'
import {Image, Form, TextArea} from 'semantic-ui-react'
import CommentComponent from './CommentComponent'



function BuildCarousel({build}){

    const [show, setShow] = useState(false);
    const [comments, setComments] = useState([])
    const [userComment, setUserComment] = useState('')
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const user = useSelector(state => state.user)


    useEffect(()=>{
      fetch(`https://e7webend.herokuapp.com/comments/?id=${build.id}`)
      .then(r => r.json())
      .then(obj => setComments(obj))
    },[])
  

    const submit = () =>{
      fetch('https://e7webend.herokuapp.com/comments/', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({comment: userComment, user: user.id, ownership: build.id })
      })
      .then(r => r.json())
      .then(obj => {
        setUserComment('')
        setComments(prevState => [...prevState,obj])
      })
    }

    const testDelete = (object) =>{
       

      console.log(object)
      let test = comments.filter(comments => {
      if(comments === object){
        return null
      }
      else{
        return comments 
      }}) 
      setComments(test) 

    }

  
    const deleteComment = (comment) =>{
      console.log(comment)
        fetch(`https://e7webend.herokuapp.com/comments/${comment.id}`, {
          method: 'delete'
        })
        .then(obj => testDelete(comment) )
      }
    
  
   

  return (
      <>
            <Image src={build.builds} onClick={handleShow} alt="First slide" style={{width:"100%",height: "400px", marginLeft:"15px"}}/>
            <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
              <Modal.Title>Builds</Modal.Title>
            </Modal.Header>
            <Modal.Body><Image src={build.builds} alt="First slide"/></Modal.Body>
            <Modal.Body>Uploaded by <strong>{build.user.username}</strong></Modal.Body>
            <Modal.Body><CommentComponent deleteComment={deleteComment} comments={comments} /></Modal.Body>
          
            {user?
            <>
            <Modal.Footer>
            <Form style={{margin: "auto"}}>
            <Form.Field
              id='form-textarea-control-opinion'
              control={TextArea}
              label='Comment'
              placeholder='Comment'
              style={{width: "400px"}}
              value = {userComment}
              onChange = {(e) => setUserComment(e.target.value)}
            />
            </Form>
            </Modal.Footer>
              <Button variant="primary" onClick={submit} >
                Submit
              </Button>
              </>:null }
            
          </Modal> 
    </>
  )
}

export default BuildCarousel