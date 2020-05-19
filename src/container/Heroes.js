import React, {useState, useEffect} from 'react';
import { Header, Menu, Card, Loader, Dimmer, Segment } from 'semantic-ui-react'
import HeroCard from '../components/HeroCard'
import { useSelector} from 'react-redux'



function Heroes(props){

  const [activeItem, setActiveItem] = useState("")


  const heros =  useSelector(state => state.heroes)

  
 


  return (
    
     <>
     <Dimmer page={true} active={heros.length>0? false:true} >
    <Loader active={true} style={{marginTop:"100px", color: "white"}} size='massive'>Loading</Loader>
    </Dimmer>
    {heros? 
      <>
    <Header style={{margin:"auto"}} size='huge'>Heroes</Header>
    <div style={{float: "right", position: "absolute", top: "20px", marginLeft: "20px "}}>
      <Menu text>
          <Menu.Item header>Sort By</Menu.Item>
          <Menu.Item
            name='closest'
            active={activeItem === 'closest'}
            onClick={()=>setActiveItem('closest')}
          />
          <Menu.Item
            name='mostComments'
            active={activeItem === 'mostComments'}
            onClick={()=>setActiveItem('mostComments')}
          />
          <Menu.Item
            name='mostPopular'
            active={activeItem === 'mostPopular'}
            onClick={()=>setActiveItem('mostPopular')}
          />
        </Menu>
  <Card.Group itemsPerRow={4} style={{margin: "auto", width: "90%"}}>
    { heros.map(hero => <HeroCard key={hero.id} hero={hero}/>)}
  </Card.Group>
    </div>
    </>
    :null}
    </>
  )
}

export default Heroes