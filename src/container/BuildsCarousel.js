import React, {useState, useEffect} from 'react';
import {Carousel,Modal,Button} from 'react-bootstrap'
import {Image} from 'semantic-ui-react'
import BuildCarousel from '../components/BuildCarousel'



function BuildsCarousel({builds}){

  return (
    <Carousel style={{ width: "600px"}}>
          {builds.map(build=>{
            return <Carousel.Item key={build.id}>
            <BuildCarousel build={build}/>
        </Carousel.Item> 
          })}
      </Carousel>
  )
}

export default BuildsCarousel