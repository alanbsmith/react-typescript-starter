import * as React from 'react';

import Button from '../Button';

import './style.scss';

interface AppProps {
  name: string;
}

interface AppState {
  count: number;
}

class App extends React.Component<AppProps, AppState> {
  state = {
    count: 0
  };

  static Button = Button;

  static defaultProps: AppProps = {
    name: 'World'
  };

  private handleClick = (e) => {
    this.setState((state) => ({ count: state.count + 1 }));
  };

  public render() {
    return (
      <React.Fragment>
        <h1>Hello, {this.props.name}!</h1>
        <Button count={this.state.count} onClick={this.handleClick} />
        {this.props.children}
      </React.Fragment>
    );
  }
}

export default App;
