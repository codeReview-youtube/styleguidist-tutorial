import React from 'react';
import './button.scss';
/**
 * @author
 * @function Button
 **/

const Button = ({ title }) => {
  return <button className='button'>{title}</button>;
};

export default Button;
