import React from 'react';
import './Message.css';

const Message = ({ text }) => {
  return (
    <div>
      <h1 className='text'>{text}</h1>
    </div>
  );
};

export default Message;