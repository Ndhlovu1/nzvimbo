import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Users from './user/pages/users';
import NewPlace from './places/pages/NewPlace';

const App = () => {
  return (
    <Router> 
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





    
    </Router>   


  );
}

export default App;
