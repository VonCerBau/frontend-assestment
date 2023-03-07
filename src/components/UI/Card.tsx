import React from 'react';

const Card = (props: any) => {
  return (
    <div className={`rounded-md border border-gray-300 border-sm p-9 ${props.className}`}>{props.children}</div>
  );
};

export default Card;
