import { arrayOf, string } from 'prop-types';
import { withAppContext } from 'providers/App';
import React, { Component } from 'react';
import styles from './styles.module.scss';

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
    const { name, image, status, species, gender } = this.props;
    return (
      <div className={styles.card}>
        <div style={{ backgroundImage: `url('${image}')` }} alt={name} className={styles.image} />
        <div className={styles.caption}>
          <div className={styles.name}>{name}</div>
          <div class={styles.species}>{species}</div>
          <ul className={styles.details}>
            <li>
              <span className={styles.detailsItem}>STATUS:</span>
              {status}
            </li>
            <li>
              <span className={styles.detailsItem}>GENDER:</span>
              {gender}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default withAppContext(Character);
