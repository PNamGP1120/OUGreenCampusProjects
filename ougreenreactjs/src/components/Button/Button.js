import React from 'react';
import './Button.css';

const Button = ({ children, onClick, type = 'primary', as: Component = 'button', ...props }) => {
  const className = `btn ${type === 'secondary' ? 'btn-secondary' : 'btn-primary'}`;
  return <Component className={className} onClick={onClick} {...props}>{children}</Component>;
};

export default Button;