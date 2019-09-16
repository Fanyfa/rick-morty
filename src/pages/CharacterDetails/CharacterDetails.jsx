import Character from 'components/Character/';
import Header from 'components/Header/';
import { arrayOf, string } from 'prop-types';
import React, { Component } from 'react';
import fetch from 'services/fetch';
import styles from './styles.module.scss';

class CharacterDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      character: undefined,
      episodes: arrayOf(string),
    };
  }

  componentDidMount() {
    this.getDetailsCharacter();
  }

  getDetailsCharacter = () => {
    const { id } = this.props.match.params;
    fetch(`https://rickandmortyapi.com/api/character/${id}`).then(data => {
      const episodesNumber = data.episode.map(item => {
        return item.split('/').pop();
      });
      this.setState({
        character: data,
        episodes: episodesNumber,
      });
    });
  };

  render() {
    const { character, episodes } = this.state;
    return character ? (
      <div className={styles.container}>
        <Header />
        <Character
          name={character.name}
          species={character.species}
          gender={character.gender}
          image={character.image}
          status={character.status}
          origin={character.origin.name}
          type={character.type}
          location={character.location.name}
          episodes={episodes.join(', ')}
        />
      </div>
    ) : null;
  }
}

export default CharacterDetails;
