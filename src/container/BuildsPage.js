import React, {useState, useEffect} from 'react';
import { Header, Menu, Card, Image } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux'
import BuildCards from '../components/BuildCards'



function BuildsPage(props){


  const [builds, setBuilds] = useState([])
  const user =  useSelector(state => state.user)



  useEffect(()=>{
    fetch(`http://localhost:3000/builds/${props.match.params.id}`)
    .then(r=> r.json())
    .then(obj => setBuilds(obj))
  },[])


  return (
    <>
    <Card.Group itemsPerRow={3}  style={{margin: "auto"}}>
      {builds.map(build => <BuildCards key={build.id} build={build}/>)}
    </Card.Group>
    </>
  )
}

export default BuildsPage