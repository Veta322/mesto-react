import React from 'react';

function Popup() {
  return (
    <><section className="popup popup-edit">
      <div className="popup__content">
        <button className="button popup__close close-edit" type="button">
          <img className="popup__close-icon" src="<%=require('./images/Close.svg')%>" alt="крестик" />
        </button>
        <form className="form form-edit" name="edit-info">
          <h2 className="form__heading">Редактировать профиль</h2>
          <fieldset className="form__input-container">

            <input
              placeholder="Имя"
              type="text"
              className="form__item form__item_type_name"
              id="edit-name"
              name="name"
              minLength="2"
              maxLength="40"
              required />
            <span className="popup__error popup__error-edit-name"></span>

            <input
              placeholder="О себе"
              type="text"
              className="form__item form__item_type_job"
              id="edit-job"
              name="job"
              minLength="2"
              maxLength="200"
              required />
            <span className="popup__error popup__error-edit-job"></span>

          </fieldset>
          <button type="submit" className="button popup__save">Сохранить</button>
        </form>
      </div>
    </section><section className="popup popup-add">
        <div className="popup__content">
          <button className="button popup__close close-add" type="button">
            <img className="popup__close-icon" src="<%=require('./images/Close.svg')%>" alt="крестик" />
          </button>
          <form className="form form-add" name="add-content">
            <h2 className="form__heading">Новое место</h2>
            <fieldset className="form__input-container">
              <input
                type="text"
                className="form__item form__item_type_title"
                name="title"
                id="add-title"
                placeholder="Название"
                minLength="2"
                maxLength="30"
                required />
              <span className="popup__error popup__error-add-title"></span>
              <input
                type="url"
                className="form__item form__item_type_url"
                name="link"
                id="add-pic"
                placeholder="Ссылка на картинку"
                required />
              <span className="popup__error popup__error-add-pic"></span>
            </fieldset>
            <button type="submit" className="button popup__save">Создать</button>
          </form>
        </div>
      </section><section className="popup popup-image">
        <div className="popup__content popup__content_image">
          <button className="button popup__close close-image" type="button">
            <img className="popup__close-icon" src="<%=require('./images/Close.svg')%>" alt="крестик" />
          </button>
          <div className="open-content">
            <img className="open-content__image" />
            <h2 className="open-content__title"></h2>
          </div>
        </div>
      </section><section className="popup popup-avatar">
        <div className="popup__content">
          <button className="button popup__close" type="button">
            <img className="popup__close-icon" src="<%=require('./images/Close.svg')%>" alt="крестик" />
          </button>
          <form className="form form-avatar" name="avatar-content">
            <h2 className="form__heading">Обновить аватар</h2>
            <fieldset className="form__input-container">
              <input
                type="link"
                className="form__item form__item_type_title"
                name="link"
                id="link"
                placeholder="Ссылка на картинку"
                required />
              <span className="popup__error popup__error-add-title"></span>
              <button type="submit" className="button popup__save popup__save-avatar">Сохранить</button>
            </fieldset>
          </form>
        </div>
      </section><section className="popup popup-delete">
        <div className="popup__content">
          <button className="button popup__close " type="button">
            <img className="popup__close-icon" src="<%=require('./images/Close.svg')%>" alt="крестик" />
          </button>

          <form className="form form-delete" name="delete-content">
            <h2 className="form__heading form__heading-delete">Вы уверены?</h2>

            <button type="submit" className="button popup__save popup__submit">Да</button>
          </form>
        </div>
      </section></>
  );
}
  
export default Popup;