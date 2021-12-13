import { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import * as authService from './services/authServise';

import * as api from './services/data';

import Header from "./components/Header";
import WelcomeWorld from "./components/WelcomeWorld";
import Login from "./components/Login";
import Register from "./components/Register";
import CreateGame from "./components/CreateGame";
import Catalog from "./components/Catalog";

import Details from './components/Details';

window.api = api;

function App() {

  const [userInfo, setUserInfo] = useState({isAuthenticated: false, username: ''});

  useEffect(() => {
     let user = authService.getUser();

     setUserInfo({
       isAuthenticated: Boolean(user),
       user: user
     })
  }, []);

  const onLogin = (username) => {
    setUserInfo({
      isAuthenticated: true,
      user: username
    })
 
  };


  return (

    <div id="box">

      <Header component={Header} {...userInfo} />

      <main id="main-content">
        <Switch>

          <Route path="/" exact component={WelcomeWorld} />
          <Route path="/home" component={WelcomeWorld} />
          <Route path="/games" component={Catalog} />
          <Route path="/create-game" component={CreateGame} />
          <Route path="/login" component={Login} onLogin={onLogin} />
          <Route path="/register" component={Register} />
          <Route path="/game-play/games/:id" component={Details} />
          <Route path="/logout" render={(props) => {
            console.log('You are logged out!');
            //props.history.push('/')
            return <Redirect to='/' />
          }} />

        </Switch>
       

        {/* { router(page) || <ErrorPage />} */}
        
      </main>

    </div>

  );
}

export default App;
