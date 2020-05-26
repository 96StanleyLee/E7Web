import React, {useState, useEffect} from 'react';
import HeroStatsTable from './HeroStatsTable'
import ArtifactsCarousel from '../container/ArtifactsCarousel'
import { useSelector } from 'react-redux'
import { Container, Table, Image, Grid, Tab } from 'semantic-ui-react'
import {Button} from 'react-bootstrap'
import BuildsCarousel from '../container/BuildsCarousel'
import UploadModal from './UploadModal'
import {Link} from "react-router-dom";






function HeroPage(props){
  let panes = ""
  const [heroFound, setHeroFound] = useState([])
  const [suggestions, setSuggestions] = useState([])
  const [suggestionArtifact, setSuggestionArtifact] = useState([])
  const [builds, setBuilds] = useState([])


  const heros =  useSelector(state => state.heroes)
  const user = useSelector(state => state.user)

  
  useEffect(()=>{
    let hero = heros.filter(heros => heros.id === parseInt(props.match.params.id))
    setHeroFound(hero)
    if(hero.length > 0 ){
    setSuggestions(hero[0].suggestions)
    }
  },[heros])


  useEffect(()=>{
    fetch(`http://localhost:3000/builds/?id=${props.match.params.id}`)
    .then(r => r.json())
    .then(obj => setBuilds(obj))
  },[user])



  useEffect(()=>{
    if(suggestions.length>0){
      suggestions.forEach(suggestion=>{
        fetch(`http://localhost:3000/artifacts/${suggestion.artifact_id}`)
        .then(r => r.json())
        .then(object => setSuggestionArtifact(prevState =>{
          return [...prevState, object]
        }))
      })
    }
  },[suggestions])




  if(Object.keys(heroFound).length !== 0){
  panes = [
    {menuItem: heroFound[0].skills[0].name, render: () => 
    <Tab.Pane>
      <Image src={heroFound[0].skills[0].icon}/>
      {heroFound[0].skills[0].description}
      </Tab.Pane> }
    ,
    { menuItem: heroFound[0].skills[1].name, render: () => 
    <Tab.Pane>
       <Image src={heroFound[0].skills[1].icon}/>
      {heroFound[0].skills[1].description}
      </Tab.Pane> },
      { menuItem: heroFound[0].skills[2].name, render: () => 
        <Tab.Pane>
           <Image src={heroFound[0].skills[2].icon}/>
          {heroFound[0].skills[2].description}
          </Tab.Pane> }
  ]
}


  return (
  <>
  {heroFound.length > 0 ?  
  <>
  <Grid padded={"horizontally"} columns={4}>
  <Grid.Column  width={5} style={{marginLeft: "40px", marginTop: "20px"}} >
    <Container className="home-description" text style={{paddingBottom: "10px"}} >
      <p style={{fontSize:"30px"}}>{heroFound[0].name}</p>
      <p></p>
      {heroFound[0].stats[0].story}
      <p><h1> Base Stats </h1></p>
      <Table celled>
        <HeroStatsTable stats={heroFound[0].stats[0]}/>
      </Table>
      <p><h1> Skills </h1></p>
      <Tab panes={panes} />
      <p><h1> Builds </h1></p>
      <Link to={`/builds/${props.match.params.id}`}><Button style={{marginLeft: "15px", marginBottom: "10px"}}>All Builds</Button></Link>    
      {user?<UploadModal id={props.match.params.id} set={setBuilds}/>:null}
      <BuildsCarousel builds={builds}  />
    </Container>
  </Grid.Column>
  <Grid.Column></Grid.Column>
  <Grid.Column  >
      <Image style={{ marginTop: "20px"}} src= {heroFound[0].image} />
        <ArtifactsCarousel artifacts={suggestionArtifact}/>
  </Grid.Column>
    </Grid>
    </>
    : null}
  
    </>
  )
}

export default HeroPage