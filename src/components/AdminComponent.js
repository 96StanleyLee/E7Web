import React, {useState, useEffect} from 'react';
import {Table, Button, Image} from 'semantic-ui-react'


function AdminComponent(props){





    return (
      
      <>
      <Table.Row>
      <Table.Cell>{props.build.user.username}</Table.Cell>
        <Table.Cell>{props.build.hero.poster_name}</Table.Cell>
        <Table.Cell><Image style={{width:"200px", height:"200px"}} src={props.build.builds}/></Table.Cell>
        <Table.Cell><Button onClick={()=>props.accept(props.build)} color="green"> Hi </Button> <Button onClick={()=>props.reject(props.build)} color="red">Bye</Button></Table.Cell>
        </Table.Row>
     </>
    )
}

export default AdminComponent