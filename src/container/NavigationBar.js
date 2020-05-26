import React, {useState} from 'react';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'
import {Link} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import ChatContainer from '../container/ChatContainer'



function NavigationBar(props) {
  
  const user =  useSelector(state => state.user)
  const dispatch = useDispatch()
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);

  const logout = () =>{
    fetch("https://e7webend.herokuapp.com/logout", {
      method: "POST",
      credentials: "include"
    })
      .then(r => r.json())
      .then(obj => {
        dispatch({ type: "SET_USER", payload:undefined})
      })
  }


    return (
      <>
      {show? <ChatContainer show={show} close={handleShow}/>:null}
 
      <Navbar className="navbar" bg="light" expand="lg">
      <Navbar.Brand href="/">
      <img src="https://images.mmorpg.com/features/13458/images/yuna_logo.png"
       width = "120"
       height = "80"     
      />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" >
          <Link style={{padding: "10px"}} to='/'>Home</Link>
          <Link style={{padding: "10px"}} to="/heroes">Heroes</Link>
          <Link style={{padding: "10px"}} to="/artifacts">Artifacts</Link>
          {user === undefined? null:
          <Link style={{padding: "10px"}} varient="primary" onClick={handleShow}>Chat</Link>
          }
          {user!== undefined && user.user_type === "admin"? 
          <Link style={{padding: "10px"}} to="/admin">Review</Link>
          :null}
        </Nav>        

        {user === undefined?
        <>
        <Link to="/register"><Button variant="primary"style={{marginRight: "10px"}}>Register</Button></Link>
        <Link to="/login"><Button variant="success" >Login</Button></Link>
        </>
        :
        <Button variant="danger" onClick={logout} >Logout</Button>}
        </Navbar.Collapse>
      </Navbar>
      </>

    )
}

export default NavigationBar
