import React, {useState, useEffect} from 'react';
import { Header, Menu, Card, Loader, Dimmer, Segment, Dropdown } from 'semantic-ui-react'
import HeroCard from '../components/HeroCard'
import { useSelector} from 'react-redux'



function Heroes(props){

  const [activeItem, setActiveItem] = useState("")


  const heros =  useSelector(state => state.heroes)

  
  const sort = () =>{
    if(activeItem === "name"){
      let hero = heros.sort((hero1,hero2) => (hero1.name).localeCompare(hero2.name))
      return hero 
    }
    else if(activeItem === "role"){
      let hero = heros.sort((hero1,hero2) => (hero1.role).localeCompare(hero2.role))
      return hero 
    }
    return heros

  }

 
  const options = [
    { text: 'Name', value: "name" },
    { text: 'Role', value: "role" },

  ]

  const set = (e,value) =>{
    setActiveItem(value.value)
  }
  return (
    
     <>
     <Dimmer page={true} active={heros.length>0? false:true} >
    <Loader active={true} style={{marginTop:"100px", color: "white"}} size='massive'>Loading</Loader>
    </Dimmer>
    {heros? 
      <>
    <Header style={{margin:"auto"}} size='huge'>Heroes</Header>

    <div style={{float: "right", position: "absolute", top: "20px", marginLeft: "20px "}}>
    <Dropdown text='Sort' onChange={(e,value)=>set(e,value)} options={options} simple item />
{/* 
      <Menu text>
          <Menu.Item header>Sort By</Menu.Item>
          <Menu.Item
            name='Role'
            active={activeItem === 'role'}
            onClick={()=>setActiveItem('role')}
          />
          <Menu.Item
            name='Name'
            active={activeItem === 'name'}
            onClick={()=>setActiveItem('name')}
          />
        </Menu> */}
  <Card.Group itemsPerRow={4} style={{margin: "auto", width: "90%"}}>
    { sort().map(hero => <HeroCard key={hero.id} hero={hero}/>)}
  </Card.Group>
    </div>
    </>
    :null}
    </>
  )
}

export default Heroes