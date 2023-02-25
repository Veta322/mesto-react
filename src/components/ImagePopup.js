import React from 'react';


function ImagePopup() {
  return (
    <section class="popup popup-image">
    <div class="popup__content popup__content_image">
      <button class="button popup__close close-image" type="button" onClick={onClose}>
        <img class="popup__close-icon" src={image} alt="крестик"/>
      </button>
      <div class="open-content">
        <img class="open-content__image"/>
        <h2 class="open-content__title"></h2>
      </div>
      </div>
  </section>
  );
}
  
export default ImagePopup;