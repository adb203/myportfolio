import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {LandingPage} from './components/LandingPage/LandingPage.jsx'
import {AboutMe} from './components/AboutMe/AboutMe.jsx'

function App() {
  return (
    <div>
      <Switch>
        <Route path= "/" component={AboutMe}/>
        <Route path= "/about" exact component={LandingPage}/>
      </Switch>
    </div>
  );
}

export default App;
