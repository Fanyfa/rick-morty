import Character from 'components/Character/';
import Input from 'components/Input/';
import { withAppContext } from 'providers/App';
import React, { Component } from 'react';
import API from 'services/API';
import RickAndMorty from './img/Rick_and_Morty.png';
import styles from './styles.module.scss';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }

  componentDidMount() {
    this.getCharacters();
  }

  getCharacters = () => {
    const {
      context: { setCharacters, setApiInfo },
    } = this.props;

    API('api/character/').then(data => {
      setCharacters(data.results);
      setApiInfo(data.info);
    });
  };

  handleOnchange = name => {
    this.setState({
      name,
    });
  };

  render() {
    const {
      context: { characters },
    } = this.props;
    const { name } = this.state;
    return (
      <div>
        <div className={styles.container}>
          <img src={RickAndMorty} alt="Morty" className={styles.image} />
        </div>
        <div className={styles.input}>
          <span>Who are you looking for?</span>
          <Input onChange={this.handleOnchange} className={styles.input} />
        </div>
        {characters
          .filter(item => (name === '' ? true : item.name.toLowerCase().includes(name.toLowerCase())))
          .map(character => {
            return (
              <Character
                name={character.name}
                species={character.species}
                gender={character.gender}
                image={character.image}
                status={character.status}
              />
            );
          })}
      </div>
    );
  }
}

export default withAppContext(Home);
