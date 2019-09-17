import Character from 'components/Character/';
import React from 'react';
import renderer from 'react-test-renderer';

const NAME = 'Beth';
const STATUS = 'Alive';
const SPECIES = 'Human';
const GENDER = 'Female';
const IMAGE = 'https://rickandmortyapi.com/api/character/avatar/3.jpeg';
const ORIGIN = 'Earth';
const TYPE = 'Human';
const LOCATION = 'Earth';
const EPISODES = '1, 2, 3';

describe('<Character>', () => {
  it('renders', () => {
    const tree = renderer
      .create(<Character name={NAME} status={STATUS} species={SPECIES} gender={GENDER} image={IMAGE} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {origin}', () => {
    const tree = renderer
      .create(
        <Character
          name={NAME}
          status={STATUS}
          species={SPECIES}
          gender={GENDER}
          image={IMAGE}
          origin={ORIGIN}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {type}', () => {
    const tree = renderer
      .create(
        <Character name={NAME} status={STATUS} species={SPECIES} gender={GENDER} image={IMAGE} type={TYPE} />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {location}', () => {
    const tree = renderer
      .create(
        <Character
          name={NAME}
          status={STATUS}
          species={SPECIES}
          gender={GENDER}
          image={IMAGE}
          location={LOCATION}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when {episodes}', () => {
    const tree = renderer
      .create(
        <Character
          name={NAME}
          status={STATUS}
          species={SPECIES}
          gender={GENDER}
          image={IMAGE}
          episodes={EPISODES}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
