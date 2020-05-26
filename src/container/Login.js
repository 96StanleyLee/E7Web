import React, {useState} from 'react';
import {Form, Button} from 'semantic-ui-react'
import {Redirect} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {loginUser} from '../store/actions'


function Login(){


    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch()
    const user =  useSelector(state => state.user)


    const handleSubmit = (username,password) =>{
        dispatch(loginUser(username, password))
    }

    
    return (
      <>
      {!user? <h1>bye</h1>:<Redirect to="/" />}
      <Form style={{margin: "auto"}}>
        <Form.Field>
        <label>Username</label>
        <input name="username" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='Username' />
        </Form.Field>
        <Form.Field>
        <label>Password</label>
        <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password' />
        </Form.Field>
         <Button onClick={()=>handleSubmit(username,password)} type='submit'>Submit</Button>
      </Form>    
      </>
    )
}

export default Login