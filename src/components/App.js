import React from "react";
import Footer from "./Footer.js";
import Header from "./Header.js";
import Main from "./Main.js";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup.js";
function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({
    card: {},
    isOpen: false,
  });

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({ ...selectedCard, isOpen: false });
  }

  function handleCardClick(card) {
    setSelectedCard({ card, isOpen: true });
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />

      <Footer />

      <PopupWithForm
        title="Редактировать профиль"
        type="edit"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        submit="Сохранить"
      >
        <input
          placeholder="Имя"
          type="text"
          className="form__item form__item_type_name"
          id="edit-name"
          name="name"
          minLength="2"
          maxLength="40"
          required
        />
        <span className="popup__error popup__error-edit-name"></span>
        <input
          placeholder="О себе"
          type="text"
          className="form__item form__item_type_job"
          id="edit-job"
          name="job"
          minLength="2"
          maxLength="200"
          required
        />
        <span className="popup__error popup__error-edit-job"></span>
      </PopupWithForm>
      <PopupWithForm
        title="Новое место"
        type="add"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        submit="Создать"
      >
        <input
          type="text"
          className="form__item form__item_type_title"
          name="title"
          id="add-title"
          placeholder="Название"
          minLength="2"
          maxLength="30"
          required
        />
        <span className="popup__error popup__error-add-title"></span>
        <input
          type="url"
          className="form__item form__item_type_url"
          name="link"
          id="add-pic"
          placeholder="Ссылка на картинку"
          required
        />
        <span className="popup__error popup__error-add-pic"></span>
      </PopupWithForm>

      <PopupWithForm
        title="Обновить аватар"
        type="avatar"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        submit="Сохранить"
      >
        <input
          type="url"
          className="form__item form__item_type_title"
          name="link"
          id="link"
          placeholder="Ссылка на картинку"
          required
        />
        <span className="popup__error popup__error-add-pic"></span>
      </PopupWithForm>

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
