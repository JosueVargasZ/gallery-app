import React from 'react';

export const MediaCard = () => {
    return (
        <figure className="card">
            <img className="card__image" src="https://placeimg.com/300/300/nature" alt="photo" />
            <figcaption className="card__info">
                <button className="card__info__btn card__info__btn">+</button> {/* set as favorite -star icon */}
                <button className="card__info__btn card__info__btn">-</button> {/* delete picture -trash icon*/}
            </figcaption>
        </figure>
    )
}
