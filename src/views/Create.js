import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { createCard } from '../api/data/cardData';

const initialState = {
  title: '',
  description: '',
};

export default function Create() {
  const [formInput, setFormInput] = useState(initialState);
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormInput(initialState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    createCard(formInput).then(() => {
      resetForm();
      history.push('/');
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="text-center">Create Card</h1>
      <div className="m-3">
        <input
          type="text"
          className="form-control"
          name="title"
          value={formInput.title}
          onChange={handleChange}
        />
      </div>
      <div className="m-3">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          name="description"
          value={formInput.description}
          onChange={handleChange}
        />
      </div>
      <div className="m-3">
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </div>
    </form>
  );
}
