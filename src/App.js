import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {LandingPage} from './components/LandingPage/LandingPage.jsx'
import {AboutMe} from './components/AboutMe/AboutMe.jsx'

function App() {
  return (
    <div>
      <Switch>
        <Route path={process.env.PUBLIC_URL + '/about'} component={AboutMe}/>
        <Route path={process.env.PUBLIC_URL + '/'} exact component={LandingPage}/>
      </Switch>
    </div>
  );
}

export default App;
