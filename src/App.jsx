import CharacterDetails from 'pages/CharacterDetails';
import Home from 'pages/Home';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" render={() => <Home />} />
        <Route
          exact
          path="/CharacterDetails/:id"
          render={props => <CharacterDetails match={props.match} />}
        />
      </Router>
    );
  }
}

export default App;
