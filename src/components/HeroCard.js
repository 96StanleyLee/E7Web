import React, {useState} from 'react';
import { Card, Image } from 'semantic-ui-react'
import {Link} from "react-router-dom";



function HeroCard(props){


  return (
    <>
    <Card>
      <Card.Content>
      <Link to={`/heroes/${props.hero.id}`}>
        <Image
          floated='right'
          size='tiny'
          src={props.hero.icon}
        />
      </Link>
        <Card.Header>{props.hero.name}</Card.Header>
        <Card.Meta>{props.hero.role === "manauser"? "SOULWEAVER": props.hero.role.toUpperCase()}</Card.Meta>
        <Card.Description>
          {props.hero.description + '.'}
        </Card.Description>
      </Card.Content>
    </Card>
    </>
  )
}

export default HeroCard









