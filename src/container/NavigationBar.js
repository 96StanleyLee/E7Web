import React from 'react';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'
import {Link} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'









function NavigationBar(props) {
  const user =  useSelector(state => state.user)
  const dispatch = useDispatch()

  const logout = () =>{
    fetch("http://localhost:3000/logout", {
      method: "POST",
      credentials: "include"
    })
      .then(r => r.json())
      .then(obj => {
        dispatch({ type: "SET_USER", payload:undefined})
      })
  }

  console.log(user)

    return (
      <Navbar  className="navbar" bg="light" expand="lg">
      <Navbar.Brand href="/">
      <img src="https://images.mmorpg.com/features/13458/images/yuna_logo.png"
       width = "120"
       height = "80"     
      />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" >
          <Nav.Link><Link to="/">Home</Link></Nav.Link>
          <Nav.Link><Link to="/heroes">Heroes</Link></Nav.Link>
          <Nav.Link><Link to="/artifacts">Artifacts</Link></Nav.Link>
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

    )
}

export default NavigationBar
