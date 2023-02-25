import React from "react";
import trash from "../images/trash.svg";
import heart from "../images/heart.svg";

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <div className="element">
      <button className="button element__delete" type="button">
        <img className="element__delete-icon" src={trash} alt="мусорка" />
      </button>
      <img
        className="element__image"
        src={props.card.link}
        onClick={handleClick}
      />
      <div className="element__description">
        <h2 className="element__title">{props.card.name}</h2>
        <div>
          <button className="button element__like" type="button">
            <img className="element__like-icon" src={heart} alt="сердечко" />
          </button>
          <div className="element__counter">{props.card.likes.length}</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
