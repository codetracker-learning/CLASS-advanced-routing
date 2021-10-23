import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Card({ card }) {
  return (
    <div>
      <div className="card" style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title">{card.title}</h5>
          <p className="card-text">{card.description}</p>
          <Link to={`/edit/${card.id}`} className="btn btn-primary">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  card: PropTypes.shape(PropTypes.obj).isRequired,
};
