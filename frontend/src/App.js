import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BookForm from './BookForm';
function App() {
  return (
    <>
    <h1>raeden</h1>
    <Switch>
      <Route exact path="/" component={BookForm}/>
    </Switch>
    </>
    
  );
}

export default App;
