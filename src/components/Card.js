import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function Card({card, onCardClick, onCardLike, onCardDelete}) {
    const currentUser = React.useContext(CurrentUserContext);

    const { name, link, likes, owner } = card

    const isOwn = owner._id === currentUser._id;

    const isLiked = likes.some(i => i._id === currentUser._id);
    const cardLikeButtonClassName = (
        `element__like-button ${isLiked && 'element__like-button-active'}`
     );

    const handleCardClick = () => {
        onCardClick(card);
    }

    const handleLikeClick = () => {
        onCardLike(card);
    }

    const handleDeleteClick = () => {
        onCardDelete(card._id);
    }

    return(
        <li className="element" id={card.id}>
            <img className="element__image" src={`${link}`} alt={name} onClick={handleCardClick}/>
            {isOwn && <button className="element__trash-button" type="button" onClick={handleDeleteClick}></button>}
            <div className="element__card">
                <h2 className="element__title">{name}</h2>
                <div className="element__like">
                    <button className={cardLikeButtonClassName} type="button" onClick={handleLikeClick}></button>
                    <p className="element__like-counter">{likes.length}</p>
                </div>
            </div>
        </li>
    );
}

export default Card