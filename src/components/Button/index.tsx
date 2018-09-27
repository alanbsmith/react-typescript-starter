import * as React from 'react';

import './style.scss';

interface ButtonProps {
  count: number;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

const Button: React.SFC<ButtonProps> = ({ count, onClick }) => {
  return <button onClick={onClick}>Clicked {count} times</button>;
};

export default Button;
