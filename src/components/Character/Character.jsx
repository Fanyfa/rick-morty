import { string } from 'prop-types';
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
    type: string,
    location: string,
    episodes: string,
  };

  static defaultProps = {
    origin: undefined,
    lastLocation: undefined,
    episodes: undefined,
    type: undefined,
  };

  render() {
    const { name, image, status, species, gender, origin, type, location, episodes } = this.props;
    return (
      <div className={styles.card}>
        <div style={{ backgroundImage: `url('${image}')` }} alt={name} className={styles.image} />
        <div className={styles.caption}>
          <div className={styles.name}>{name}</div>
          <div className={styles.species}>{species}</div>
          <ul className={styles.details}>
            <li>
              <span className={styles.detailsItem}>Status:</span>
              {status}
            </li>
            <li>
              <span className={styles.detailsItem}>Gender:</span>
              {gender}
            </li>
            {origin ? (
              <li>
                <span className={styles.detailsItem}>Origin:</span>
                {origin}
              </li>
            ) : null}
            {type ? (
              <li>
                <span className={styles.detailsItem}>Type:</span>
                {type}
              </li>
            ) : null}
            {location ? (
              <li>
                <span className={styles.detailsItem}>Location:</span>
                {location}
              </li>
            ) : null}
            {episodes ? (
              <li>
                <span className={styles.detailsItem}>Appears in episodes:</span>
                {episodes}
              </li>
            ) : null}
          </ul>
        </div>
      </div>
    );
  }
}

export default Character;
