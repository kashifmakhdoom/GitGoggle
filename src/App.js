import React, { Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import NavBar from './components/layout/navbar'
import Search from './components/users/search'
import Alert from './components/layout/alert'
import UserList from './components/users/userList'
import User from './components/users/user'
import About from './components/pages/about'

import GithubState from './context/github/githubState';
import AlertState from './context/alert/alertState';

import './App.css'

require('dotenv').config()

const App = () => {
  
  return (
    <GithubState>
      <AlertState>
      <Router>
        <div className='App'>
          <NavBar />
          <div className='container'>
            <Alert alert={alert} />
            <Switch>
              <Route
                exact
                path='/'
                render={(props) => (
                  <Fragment>
                    <Search />
                    <UserList />
                  </Fragment>
                )}
              />
              <Route exact path='/about' component={About} />
              <Route exact path='/user/:login' component={User} />
            </Switch>
          </div>
        </div>
      </Router>
      </AlertState>
    </GithubState>
  )
}

export default App
