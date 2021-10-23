import React from 'react';
import { useParams } from 'react-router-dom';

export default function Edit() {
  const { key } = useParams();

  return <div>Your params: {key}</div>;
}
