import React, { Component } from 'react';
import RickAndMorty from './img/Rick_and_Morty.png';
import styles from './styles.module.scss';

class Header extends Component {
  render() {
    return (
      <div className={styles.container}>
        <img src={RickAndMorty} alt="Morty" className={styles.image} />
      </div>
    );
  }
}

export default Header;
