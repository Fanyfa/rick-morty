import { func, string } from 'prop-types';
import React, { Component } from 'react';
import styles from './styles.module.scss';

class Button extends Component {
  static propTypes = {
    text: string.isRequired,
    onClick: func.isRequired,
  };

  render() {
    const { text, onClick } = this.props;
    return (
      <div className={styles.container}>
        <button type="button" onClick={onClick} className={styles.button}>
          {text}
        </button>
      </div>
    );
  }
}

export default Button;
