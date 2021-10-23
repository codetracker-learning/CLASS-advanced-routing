import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import cardData from '../api/data/cards';

export default function Home() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(cardData);
  });

  return (
    <div>
      {cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
}
