import Select from 'components/Select/';
import React from 'react';
import renderer from 'react-test-renderer';

const CLASSNAME = 'Lorem Inpsum';
const ONCHANGE = () => {};
const CATEGORIES = ['Alive', 'unknown', 'Dead'];

describe('<Select>', () => {
  it('renders', () => {
    const tree = renderer.create(<Select categories={CATEGORIES} onChange={ONCHANGE} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {classname}', () => {
    const tree = renderer
      .create(<Select categories={CATEGORIES} className={CLASSNAME} onChange={ONCHANGE} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {categories}', () => {
    const tree = renderer.create(<Select categories={CATEGORIES} onChange={ONCHANGE} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
