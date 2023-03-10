import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarRef = React.useRef();
  
  function handleSubmit(e) {
    e.preventDefault();
    
    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
    avatarRef.current.value = '';
    
  }

  return (
    <PopupWithForm
      title="Обновить аватар"
      type="avatar"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      submit="Сохранить"
    >
      <input
        type="url"
        className="form__item form__item_type_title"
        name="link"
        id="link"
        placeholder="Ссылка на картинку"
        required
        ref={avatarRef}
      />
      <span className="popup__error popup__error-add-pic"> </span>{" "}
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
