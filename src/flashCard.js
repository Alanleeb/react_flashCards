import React from 'react';

const Card = ({ card, questions }) => (
    <div>
        <h2>{card}</h2>
        <ul>
            {questions.map( question => 
            <li key={card.id}>{card.question}</li>
            )}
        </ul>
    </div>

)

export default Card;
