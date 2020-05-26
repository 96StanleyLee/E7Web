import React, {useState, useEffect} from 'react';
import { Header, Menu, Card, Image, Dropdown } from 'semantic-ui-react'
import ArtifactCard from '../components/ArtifactCard'
import { useSelector, useDispatch } from 'react-redux'
import {fetchArtifacts} from '../store/actions'


function Artifacts(){
  const [activeItem, setActiveItem] = useState("")




  const dispatch = useDispatch()
  const artifacts =  useSelector(state => state.artifacts)

  const user =  useSelector(state => state.user)

  
 
  const set = (e,value) =>{
    setActiveItem(value.value)
  }



  useEffect(()=>{
    dispatch(fetchArtifacts())
  },[])


  const sort = () =>{
    if(activeItem === "alphabetically"){
      let artifact = artifacts.sort((artifact1,artifact2) => (artifact1.name).localeCompare(artifact2.name))
      return artifact 
    }
    else if(activeItem === "role"){
      let artifact = artifacts.sort((artifact1,artifact2) => (artifact1.role).localeCompare(artifact2.role))
      return artifact 
    }
    return artifacts
  }

  const options = [
    { text: 'Name', value: "alphabetically" },
    { text: 'Role', value: "role" },

  ]
  return (
    <>
    <div style={{float: "right", position: "absolute", top: "20px", marginLeft: "20px "}}>
    <Dropdown text='Sort' onChange={(e,value)=>set(e,value)} options={options} simple item />
    {/* <Menu text>
          <Menu.Item header>Sort By</Menu.Item>
          <Menu.Item
            name='Role'
            active={activeItem === 'role'}
            onClick={()=>setActiveItem('role')}
          />
          <Menu.Item
            name='Alphabetically'
            active={activeItem === 'alphabetically'}
            onClick={()=>setActiveItem('alphabetically')}
          />

        </Menu> */}
  <Card.Group itemsPerRow={4} style={{margin: "auto", width: "90%"}}>
    {sort().map(artifact => <ArtifactCard artifact={artifact} />)}
  </Card.Group>
  </div>
    </>
  )
}

export default Artifacts