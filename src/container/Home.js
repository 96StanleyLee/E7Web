import React from 'react';
import logo from '../logo.svg';
import { Container, Header, Image } from 'semantic-ui-react'
import {Carousel} from 'react-bootstrap'
import {useSelector} from 'react-redux'
import ChatContainer from '../container/ChatContainer'
import {BrowserRouter as Router,Switch,Route, Redirect} from "react-router-dom";





function Home() {




  return (
    
    <>

        <div>
            <div className = "home-description">
                <Container style={{textAlign: "left"}} text fluid>
                <p></p>
                <Header as='h2'>Welcome!</Header>
                <div className="home-description-text">
                <p>Hello! This is my Mod 5 project for Flatiron.</p> 
                <p>It's essentially a website dedicated to one of the mobile games I'm currently playing, Epic 7.
                </p>
                <p>It's kind of like a website made for documentation of the different heros and items in it.</p>
                <p>I hope you enjoy your stay, and maybe it'll pique your interests!</p>
                </div>
                </Container>
            </div>
            <div className = "resources">
                <Carousel style={{width: "658px"}}>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://static.smilegatemegaport.com/event/live/epic7/world/brand/images/common/img_share_630.jpg"
                        alt="First slide"
                        style={{height: "385px",borderRadius: "1%"}}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://d3kxs6kpbh59hp.cloudfront.net/community/COMMUNITY/14781fb6531e421c8470b49c905303f1/80d19d9e3fe54893a4d18e0820584e9e_1553584432.jpg"
                        alt="First slide"
                        style={{height: "385px",borderRadius: "1%"}}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://i.redd.it/omr4o6feqi041.png"
                        alt="First slide"
                        style={{height: "385px",borderRadius: "1%"}}
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
        <Image style={{height: "600px", float: "right"}} src="https://epic7x.com/wp-content/uploads/2019/03/S3C2aEd.png" />
    </>
  )
}

export default Home;


{/* <img src={logo} className="App-logo" alt="logo" />
<p>
  Edit <code>src/App.js</code> and save to reload.
</p>
<a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Learn React
</a> */}