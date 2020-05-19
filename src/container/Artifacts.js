import React, {useState, useEffect} from 'react';
import { Header, Menu, Card, Image } from 'semantic-ui-react'
import ArtifactCard from '../components/ArtifactCard'
import { useSelector, useDispatch } from 'react-redux'
import {fetchArtifacts} from '../store/actions'


function Artifacts(){




  const dispatch = useDispatch()
  const artifacts =  useSelector(state => state.artifacts)

  const user =  useSelector(state => state.user)

  
 



  useEffect(()=>{
    dispatch(fetchArtifacts())
  },[])



  console.log(user)

  console.log(artifacts)
  return (
    <>
  <Card.Group itemsPerRow={4 } style={{margin: "auto", width: "90%"}}>
    {artifacts.map(artifact => <ArtifactCard artifact={artifact} />)}
  </Card.Group>
    </>
  )
}

export default Artifacts