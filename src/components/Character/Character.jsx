import React, { Component } from 'react';
import { string, arrayOf } from 'prop-types';
import { withAppContext } from 'providers/App';

class Character extends Component {
  static propTypes = {
    name: string.isRequired,
    status: string.isRequired,
    species: string.isRequired,
    gender: string.isRequired,
    image: string.isRequired,
    origin: string,
    lastLocation: string,
    episodes: arrayOf(string),
  };

  static defaultProps = {
    origin: undefined,
    lastLocation: undefined,
    episodes: undefined,
  };


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


export default withAppContext(Character);