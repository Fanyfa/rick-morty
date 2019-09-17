import { array, func, string } from 'prop-types';
import React, { Component } from 'react';
import styles from './styles.module.scss';

class Select extends Component {
  static propTypes = {
    className: string,
    categories: array.isRequired,
    onChange: func.isRequired,
  };

  handleOnChange = event => {
    const { onChange } = this.props;
    const value = event.currentTarget.value;
    onChange(value);
  };

  render() {
    const { className, categories } = this.props;

    return (
      <select className={`${styles.select} ${className}`} onChange={this.handleOnChange}>
        <option value="">All</option>
        {categories.map((category, index) => {
          return (
            <option key={index} value={category}>
              {category}
            </option>
          );
        })}
      </select>
    );
  }
}

export default Select;
