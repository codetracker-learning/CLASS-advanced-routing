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
      <input
        type="text"
        name="title"
        value={formInput.title}
        onChange={handleChange}
      />
      <input
        type="text"
        name="description"
        value={formInput.description}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
