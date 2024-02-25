import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation';

const App = () => {
  return (

    <Router> 
      
      <MainNavigation/>
        <main>
          {/* Set up for every route, especially our pages */}
          <Switch>

            {/* Default Path Route */}
            <Route path="/" exact={true}>
              <Users />
            </Route>

            {/* Create a New-Place in the database */}
            <Route path="/places/new" exact={true}>
              <NewPlace/>
            </Route>
              
            {/* ALLOW A REDIRECT FOR NON-EXISTENT ROUTES */}
            <Redirect to = "/" />
          </Switch>
        </main>

    </Router>   


  );
}

export default App;
