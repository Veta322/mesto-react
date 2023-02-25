import React from 'react';
import close from '../images/Close.svg';

function ImagePopup(props) {
  return (
    <section className={(props.card.isOpen ? `popup popup_open popup-image` : `popup popup-image`)}>
    <div className="popup__content popup__content_image">
      <button className="button popup__close close-image" type="button" onClick={props.onClose}>
        <img className="popup__close-icon" src={close}  alt="крестик"/>
      </button>
      <div className="open-content">
        <img className="open-content__image" src={props.card.card.link} alt={props.card.card.name}/>
        <h2 className="open-content__title">{props.card.card.name}</h2>
      </div>
      </div>
  </section>
  );
}
  
export default ImagePopup;