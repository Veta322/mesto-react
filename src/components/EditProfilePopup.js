import React from "react";
import PopupWithForm from './PopupWithForm'
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");

  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
    title="Редактировать профиль"
    type="edit"
    isOpen={isOpen}
    onClose={onClose}
    onSubmit={handleSubmit}
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
      value={name || " "}
      onChange={handleChangeName}
    />
    <span className="popup__error popup__error-edit-name"> </span>{" "}
    <input
      placeholder="О себе"
      type="text"
      className="form__item form__item_type_job"
      id="edit-job"
      name="job"
      minLength="2"
      maxLength="200"
      required
      value={description || " "}
      onChange={handleChangeDescription}
    />
    <span className="popup__error popup__error-edit-job"> </span>{" "}
  </PopupWithForm>
  );
}

export default EditProfilePopup;
