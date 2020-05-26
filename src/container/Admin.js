import React, {useState, useEffect} from 'react';
import AdminComponent from '../components/AdminComponent'
import {Table, Button, Image} from 'semantic-ui-react'
import {useSelector} from 'react-redux'
import {BrowserRouter as Router,Switch,Route, Redirect} from "react-router-dom";


function Admin(){


  const [builds, setBuilds] = useState([])
  const user =  useSelector(state => state.user)
  let chatKey = process.env.REACT_APP_CHAT_KEY


  useEffect(()=>{
    fetch('https://e7webend.herokuapp.com/review')
    .then(r =>r.json())
    .then(obj => setBuilds(obj))
  },[])

  
  const accept = (data) =>{
    let build = [...builds]
    fetch(`https://e7webend.herokuapp.com/ownerships/${data.id}`, {
      method: `PATCH`,
      body: JSON.stringify({
      completed: true
      }),
      headers: {
      "Content-type": "application/json; charset=UTF-8"
      }
      })
      .then(r => r.json())
      .then(obj => {
        build = build.filter(obj => obj.id !== data.id)
        setBuilds(build)
      })
  }

  const reject = (data) =>{
    let build = [...builds]
    fetch(`https://e7webend.herokuapp.com/ownerships/${data.id}`, {
      method: 'DELETE',
    })
    .then(resp => resp.json())
    .then(obj => {
      build = build.filter(obj => obj.id !== data.id)
      setBuilds(build)
    })

  }



    return (
      
      <>
      {Object.keys(builds).length !== 0? <Table celled style={{margin: "auto", width: "1200px"}}>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Uploader</Table.HeaderCell>
        <Table.HeaderCell>Hero</Table.HeaderCell>
        <Table.HeaderCell>Image</Table.HeaderCell>
        <Table.HeaderCell>Review Pending</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
        
        {builds.map(builds => <AdminComponent key={builds.id} build={builds} accept={accept} reject={reject}/>)}
        


    </Table.Body> 
  </Table>: null}
     </>
    )
}

export default Admin