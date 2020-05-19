import React, { useEffect } from 'react';
import './App.css';
import Home from './container/Home'
import Heroes from './container/Heroes'
import Artifacts from './container/Artifacts'
import Register from './container/Register'
import Login from './container/Login'
import HeroPage from './components/HeroPage'
import BuildsPage from './container/BuildsPage'
import NavigationBar from './container/NavigationBar'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import {fetchHeroes, auto} from './store/actions'
import { useDispatch } from 'react-redux'






function App(){
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchHeroes())
        dispatch(auto())
      },[])


    


 
  return (
      <Router>
      <NavigationBar/>
      <div className="overall">
      <Route exact path={`/`} render={Home} />
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