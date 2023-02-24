import React from 'react';

function Popup() {
  return (
    <section class="popup popup-edit">
    <div class="popup__content">
      <button class="button popup__close close-edit" type="button">
        <img class="popup__close-icon" src="<%=require('./images/Close.svg')%>" alt="крестик"/>
      </button>
      <form class="form form-edit" name="edit-info">
        <h2 class="form__heading">Редактировать профиль</h2>
        <fieldset class="form__input-container">
       
          <input
          placeholder="Имя"
          type="text" 
          class="form__item form__item_type_name" 
          id="edit-name"
          name="name" 
          minlength="2" 
          maxlength="40" 
          required > 
          <span class="popup__error popup__error-edit-name"></span>
         
          <input 
          placeholder="О себе"
          type="text" 
          class="form__item form__item_type_job" 
          id="edit-job"
          name="job" 
          minlength="2" 
          maxlength="200" 
          required>
          <span class="popup__error popup__error-edit-job"></span>
          
        </fieldset>
        <button type="submit" class="button popup__save">Сохранить</button>
      </form>
    </div>
  </section>

  <section class="popup popup-add">
    <div class="popup__content">
      <button class="button popup__close close-add" type="button">
        <img class="popup__close-icon" src="<%=require('./images/Close.svg')%>" alt="крестик"/>
      </button>
      <form class="form form-add" name="add-content">
        <h2 class="form__heading">Новое место</h2>
        <fieldset class="form__input-container">
          <input 
          type="text" 
          class="form__item form__item_type_title" 
          name="title"
          id="add-title" 
          placeholder="Название" 
          minlength="2" 
          maxlength="30" 
          required>
          <span class="popup__error popup__error-add-title"></span>
          <input 
          type="url" 
          class="form__item form__item_type_url" 
          name="link"
          id="add-pic"
          placeholder="Ссылка на картинку" 
          required>
          <span class="popup__error popup__error-add-pic"></span>
        </fieldset>
        <button type="submit" class="button popup__save">Создать</button>
      </form>
    </div>
  </section>


  <section class="popup popup-image">
    <div class="popup__content popup__content_image">
      <button class="button popup__close close-image" type="button">
        <img class="popup__close-icon" src="<%=require('./images/Close.svg')%>" alt="крестик"/>
      </button>
      <div class="open-content">
        <img class="open-content__image">
        <h2 class="open-content__title"></h2>
      </div>
      </div>
  </section>

  <section class="popup popup-avatar">
    <div class="popup__content">
      <button class="button popup__close" type="button">
        <img class="popup__close-icon" src="<%=require('./images/Close.svg')%>" alt="крестик"/>
      </button>
      <form class="form form-avatar" name="avatar-content">
        <h2 class="form__heading">Обновить аватар</h2>
        <fieldset class="form__input-container">
          <input 
          type="link" 
          class="form__item form__item_type_title" 
          name="link"
          id="link" 
          placeholder="Ссылка на картинку" 
          required>
          <span class="popup__error popup__error-add-title"></span>
          <button type="submit" class="button popup__save popup__save-avatar">Сохранить</button>
        </fieldset>
      </form>
    </div>
  </section>

  <section class="popup popup-delete">
    <div class="popup__content">
      <button class="button popup__close " type="button">
        <img class="popup__close-icon" src="<%=require('./images/Close.svg')%>" alt="крестик"/>
      </button>
     
      <form class="form form-delete" name="delete-content">
        <h2 class="form__heading form__heading-delete">Вы уверены?</h2>
     
          <button type="submit" class="button popup__save popup__submit">Да</button>
      </form>
    </div>
  </section>
  );
}
  
export default Popup;