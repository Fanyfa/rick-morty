import Header from 'components/Header/';
import React from 'react';
import renderer from 'react-test-renderer';

describe('<Header>', () => {
  it('renders', () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
