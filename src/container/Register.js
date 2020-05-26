import React from 'react';
import {Form, Button} from 'semantic-ui-react'


export default class Register extends React.Component {


    state = {
        username: "",
        password: "",
        passwordConfirm: ""
    }

    handleSubmit = event => {
        event.preventDefault()
        if (this.state.password === this.state.passwordConfirm) {
          fetch("e7webend.herokuapp.com/register", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state)
          })
          .then(r => {
            if (!r.ok) {
              alert('hey you did something wrong')
              throw r
            }
            return r.json()
          })
          .then(user => { 
            console.log(user)
            this.props.history.push("/login")
          })
          .catch(console.error)
        } else {
          alert("Your passwords do not match.")
        }
      }


      handleInputChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        })
      }



    render(){
    return (
      <>
      <Form style={{margin: "auto"}}>
        <Form.Field>
        <label>Username</label>
        <input name="username" value={this.state.username} onChange={this.handleInputChange} placeholder='Username' />
        </Form.Field>
        <Form.Field>
        <label>Password</label>
        <input type="password" name="password" value={this.state.password} onChange={this.handleInputChange} placeholder='Password' />
        </Form.Field>
        <Form.Field>
        <label>Password Confirmation</label>
        <input type="password" name="passwordConfirm" value={this.state.passwordConfirm} onChange={this.handleInputChange} placeholder='Password Confirmation' />
        </Form.Field>
        <Button onClick={this.handleSubmit} type='submit'>Submit</Button>
      </Form>    
      </>
    )
  }
}
