import React, { Component } from 'react';
import { withAppContext } from 'providers/App';
import API from 'services/API';

class Home extends Component {

  componentDidMount() {
    this.getCharacters();
  }
  
   getCharacters = () => {
    const { context: {setCharacters, setApiInfo} } = this.props;

    API('api/character/')
      .then((data) => {
        setCharacters(data.results);
        setApiInfo(data.info);
      });
  }

  render() {
    const { context: {characters} } = this.props;
    return (
      <div>
        {characters.map((character) => {
          return (
            <p>{character.name}</p>
          )
        })}
      </div>
    );
  }
}


export default withAppContext(Home);
