import React from 'react';
import Card from '../components/card';
import './cards.css';

const Cards = props => {
    return (
        <section className="card-container">
            {props.playerData.map(player => <Card title={player.title} image={player.image} description={player.description} />
            )}
        </section>
    );
}

export default Cards;