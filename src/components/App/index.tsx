import * as React from 'react';

import Button from '../Button';

import './style.scss';

type AppProps = {
  name: string;
};

type AppState = {
  count: number;
};

type DefaultProps = {
  name: string;
};

class App extends React.Component<AppProps, AppState> {
  state = {
    count: 0
  };

  static defaultProps: DefaultProps = {
    name: 'World'
  };

  handleClick = (e) => {
    this.setState((state) => ({ count: state.count + 1 }));
  };

  public render() {
    return (
      <React.Fragment>
        <h1>Hello, {this.props.name}!</h1>
        <Button count={this.state.count} onClick={this.handleClick} />
      </React.Fragment>
    );
  }
}

export default App;
