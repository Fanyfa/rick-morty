import { func, string } from 'prop-types';
import React, { Component } from 'react';
import styles from './styles.module.scss';

class Input extends Component {
  static propTypes = {
    onChange: func.isRequired,
    name: string.isRequired,
  };

  handleOnChange = event => {
    const value = event.currentTarget.value;
    this.props.onChange(value);
  };

  render() {
    return <input className={styles.input} onChange={this.handleOnChange} />;
  }
}

export default Input;
