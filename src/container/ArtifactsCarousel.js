import React, {useState, useEffect} from 'react';
import {Carousel,Modal,Button} from 'react-bootstrap'
import {Image} from 'semantic-ui-react'
import ArtifactCarousel from '../components/ArtifactCarousel'



function ArtifactsCarousel(props){



  return (
    <Carousel style={{ width: "330px"}}>
          {props.artifacts.map(suggestion=>{
            return <Carousel.Item>
            <ArtifactCarousel key ={suggestion.id} suggestion={suggestion}/>
        </Carousel.Item> 
          })}
      </Carousel>
  )
}

export default ArtifactsCarousel