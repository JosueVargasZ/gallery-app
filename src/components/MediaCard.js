import React from 'react';

export const MediaCard = () => {
    return (
        <figure className="card">
            <img className="card__image" src="https://placeimg.com/1000/850/any" alt="a pic" />
            <figcaption className="card__options">
                <nav className="card__options__menu">
                <button className="card__options__btn"><i className="far fa-star"></i></button> {/* set as favorite -star icon */}
                {/* <button className="card__options__btn"><i className="fas fa-star"></i></button>  */}
                <button className="card__options__btn"><i className="fas fa-trash-alt"></i></button> {/* delete picture -trash icon*/}
                </nav>
            </figcaption>
        </figure>
    )
}
