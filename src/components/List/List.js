import React from 'react';
import './List.css';

function List({ people }) {
  return (
    <>
      {people.map((person) => (
        <article className='person' key={person.id}>
          <img src={person.image || 'https://via.placeholder.com/60'} alt={person.name} />
          <div>
            <h4>{person.name}</h4>
            <p>Age: {person.age}</p>
          </div>
        </article>
      ))}
    </>
  );
}

export default List;
