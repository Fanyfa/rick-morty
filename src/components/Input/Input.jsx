import { func } from 'prop-types';
import React, { Component } from 'react';
import styles from './styles.module.scss';

class Input extends Component {
  static propTypes = {
    onChange: func.isRequired,
    className: '',
  };

  handleOnChange = event => {
    const value = event.currentTarget.value;
    this.props.onChange(value);
  };

  render() {
    const { className } = this.props;
    return <input className={`${styles.input} ${className}`} onChange={this.handleOnChange} />;
  }
}

export default Input;
