import Input from 'components/Input/';
import React from 'react';
import renderer from 'react-test-renderer';

const CLASSNAME = 'Lorem Inpsum';
const ONCHANGE = () => {};

describe('<Input>', () => {
  it('renders', () => {
    const tree = renderer.create(<Input onChange={ONCHANGE} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {classname}', () => {
    const tree = renderer.create(<Input className={CLASSNAME} onChange={ONCHANGE} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
