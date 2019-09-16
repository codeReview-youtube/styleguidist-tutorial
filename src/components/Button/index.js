import React from 'react';
import './button.scss';

/**
 * @author
 * @function Button
 **/

const Button = ({ title, onClick }) => {
  return <button onClick={onClick}>{title}</button>;
};

export default Button;
