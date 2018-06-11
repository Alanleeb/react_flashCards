import React from 'react';

const flashCard = ({items, flashCard}) => (
    <div>
         <h2>{flashCard}</h2>
         <ul>
            { items.map( item => <li key={item.id}>{item.question} > {item.answer}</li> )}
        </ul>
    </div>
)
export default flashCard;


