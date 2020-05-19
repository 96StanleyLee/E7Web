import React, {useState, useEffect} from 'react';
import { Container, Table, Image, Icon, Label, Menu } from 'semantic-ui-react'



function HeroStatsTable(props){


  return (
    <>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Stat</Table.HeaderCell>
        <Table.HeaderCell>Value</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>Attack</Table.Cell>
        <Table.Cell>{props.stats.attack}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Health</Table.Cell>
        <Table.Cell>{props.stats.hp}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Defense</Table.Cell>
        <Table.Cell>{props.stats.def}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Speed</Table.Cell>
        <Table.Cell>{props.stats.speed}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Crit Chance</Table.Cell>
        <Table.Cell>{props.stats.crit*100}%</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Crit Damage</Table.Cell>
        <Table.Cell>{props.stats.cdmg*100}%</Table.Cell>
      </Table.Row>
    </Table.Body>
    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan='3'>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
    </>
  )
}

export default HeroStatsTable