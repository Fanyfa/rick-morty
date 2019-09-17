import Button from 'components/Button/';
import React from 'react';
import renderer from 'react-test-renderer';

const TEXT = 'Lorem';
const ONCLICK = () => {};

describe('<Button>', () => {
  it('renders', () => {
    const tree = renderer.create(<Button text={TEXT} onClick={ONCLICK} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
