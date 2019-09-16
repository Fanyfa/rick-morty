import React, { Component } from 'react';

const AppContext = React.createContext();

class AppProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      apiInfo: {},
      categories: ['Alive', 'unknown', 'Dead'],
      setCharacters: this.setCharacters,
      setApiInfo: this.setApiInfo,
    };
  }

  setCharacters = characters => {
    this.setState({
      characters,
    });
  };

  setApiInfo = apiInfo => {
    this.setState({
      apiInfo,
    });
  };

  render() {
    const { children } = this.props;
    return <AppContext.Provider value={this.state}>{children}</AppContext.Provider>;
  }
}

export const withAppContext = WrappedComponent => {
  const withHOC = props => {
    return (
      <AppContext.Consumer>
        {context => <WrappedComponent {...props} context={context} />}
      </AppContext.Consumer>
    );
  };
  withHOC.WrappedComponent = WrappedComponent;
  return withHOC;
};

export default AppProvider;
