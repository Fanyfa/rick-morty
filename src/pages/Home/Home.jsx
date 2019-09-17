import Button from 'components/Button/';
import Character from 'components/Character/';
import Header from 'components/Header/';
import Input from 'components/Input/';
import Select from 'components/Select/';
import { withAppContext } from 'providers/App';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fetch from 'services/fetch';
import Rick from './img/rick_error.jpeg';
import styles from './styles.module.scss';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      status: '',
      error: false,
    };
  }

  componentDidMount() {
    this.getCharacters();
  }

  getCharacters = () => {
    const {
      context: { setCharacters, setApiInfo },
    } = this.props;
    const { name, status } = this.state;

    fetch(`https://rickandmortyapi.com/api/character/?name=${name}&status=${status}`).then(data => {
      if (data.error) {
        this.setState({
          error: true,
        });
      } else {
        setCharacters(data.results);
        setApiInfo(data.info);
        this.setState({
          error: false,
        });
      }
    });
  };

  getMoreCharacters = () => {
    const {
      context: { apiInfo, characters, setCharacters, setApiInfo },
    } = this.props;
    fetch(apiInfo.next).then(data => {
      setCharacters([...characters, ...data.results]);
      setApiInfo(data.info);
    });
  };

  handleInputOnchange = name => {
    this.setState({ name }, () => {
      this.getCharacters();
    });
  };

  handleSelectOnchange = status => {
    this.setState({ status }, () => {
      this.getCharacters();
    });
  };

  render() {
    const {
      context: { characters, categories, apiInfo },
    } = this.props;
    const { error } = this.state;
    return (
      <div className={styles.home}>
        <Header />
        <div className={styles.filters}>
          <div className={styles.options}>
            <span className={styles.text}>Who are you looking for?</span>
            <Input onChange={this.handleInputOnchange} className={styles.input} />
          </div>
          <div className={styles.options}>
            <span className={styles.text}>Is dead or alive?</span>
            <Select className={styles.select} categories={categories} onChange={this.handleSelectOnchange} />
          </div>
        </div>
        <div className={styles.characters}>
          {!error ? (
            characters.map((character, index) => {
              return (
                <Link key={index} to={`/CharacterDetails/${character.id}`}>
                  <Character
                    name={character.name}
                    species={character.species}
                    gender={character.gender}
                    image={character.image}
                    status={character.status}
                  />
                </Link>
              );
            })
          ) : (
            <div>
              <div className={styles.errorText}>No results found!</div>
              <img src={Rick} alt="Rick" className={styles.image} />
            </div>
          )}
        </div>
        {apiInfo.next !== '' && !error ? <Button text="More" onClick={this.getMoreCharacters} /> : null}
      </div>
    );
  }
}

export default withAppContext(Home);
