import * as React from 'react';

import './style.scss';

type ButtonProps = {
  count: number;
  onClick: any | void;
};

const Button: React.SFC<ButtonProps> = ({ count, onClick }) => {
  return <button onClick={onClick}>Clicked {count} times</button>;
};

export default Button;
