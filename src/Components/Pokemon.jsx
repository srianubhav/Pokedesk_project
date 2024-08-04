import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component
import './Pokemon.css';

function Pokemon({ name, image, id }) {
  return (
    <div className='Pokemon'>
      <div className='pokemon-name'>
        {name}
      </div>

      <Link to={`/Pokemon/${id}`}>
        <div>
          <img className='pokemon-image' src={image} alt={name} />
        </div>
      </Link>
    </div>
  );
}

export default Pokemon;
