import React, {useState, useEffect } from 'react';
import './App.css';
import Home from './container/Home'
import Heroes from './container/Heroes'
import Artifacts from './container/Artifacts'
import Register from './container/Register'
import Login from './container/Login'
import Admin from './container/Admin'
import HeroPage from './components/HeroPage'
import BuildsPage from './container/BuildsPage'
import NavigationBar from './container/NavigationBar'
import {BrowserRouter as Router,Switch,Route, Redirect} from "react-router-dom";
import {fetchHeroes, auto} from './store/actions'
import { useDispatch, useSelector } from 'react-redux'
import ChatContainer from './container/ChatContainer'




function App(){
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchHeroes())
        dispatch(auto())
      },[])

     
      const user =  useSelector(state => state.user)

      
      



  return (
      <Router>
      {user? null:<Redirect to="/login"/> }
      <NavigationBar/>
      <div className="overall">
      <Route exact path={`/`} component={Home} />
      <Route exact path={`/admin`} component={Admin} />
      <Route exact path={`/heroes`} render={() => <Heroes/>} />
      <Route exact path={`/artifacts`} render={() => <Artifacts/>} />
      <Route path="/heroes/:id" render={(routeProps) => <HeroPage {...routeProps}/>} />
      <Route path="/builds/:id" render={(routeProps) => <BuildsPage {...routeProps}/>} />
      <Route exact path={`/register`} render={routeProps => <Register {...routeProps}/>} />
      <Route exact path={`/login`} render={routeProps => <Login {...routeProps}/>} />
      </div>
      </Router>
  )
}

export default App