import React from 'react'

function Onecomment({value}) {
  return (
    <div>
        <p>Name: {value.name}</p>
        <p>"{value.content}"</p>
    </div>
  );
}

export default Onecomment;