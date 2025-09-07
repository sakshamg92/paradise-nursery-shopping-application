import React from 'react';
import './style.css';

interface ButtonProps{
  content: string;
  type?: 'button' | 'submit' | 'reset';
  messageType?: 'success' | 'error';
  onClick?: () => void;
  isdisabled?: boolean;
}

const Button = ({isdisabled, content, onClick, type = 'button', messageType = 'success'}: ButtonProps) => {
  const getClassName = () => {
    if (isdisabled) return 'disabled';
    else if (messageType === 'success') return 'success';
    else if (messageType === 'error') return 'error';
    else return '';
  };
  return (
    <button className={getClassName()} type={type} onClick={onClick}>{content}</button>
  );
};

export default Button;