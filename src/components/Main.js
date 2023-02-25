import React from 'react';
import avatar from '../images/avatar.jpg';
import pencil from '../images/pencil.svg';
import plus from '../images/plus.svg';

function Main({ onEditAvatar, onEditProfile, onAddPlace}) {


  return (
    <main className="page__content">
    <section className="profile">
      <div className="profile__avatar" onClick={onEditAvatar}>
      <img className="profile__avatar-pic" src={avatar} alt="туть должен быть аватар :("/>
    </div>
      <div className="profile__info">
        <h1 className="profile__name">Валерочка</h1>
        <button className="button profile__edit" type="button" onClick={onEditProfile}>
          <img className="profile__edit-icon" src={pencil} alt="карандашик"/>
        </button>
        <h2 className="profile__job">Исследователь гаража</h2>
      </div>

      <button className="button profile__add" type="button" onClick={onAddPlace}>
        <img className="profile__add-icon" src={plus} alt="плюсик"/>
      </button>

    </section>

  


 {/*
    <section className="elements">
      <template id="element" className="elements-template_type_default">
        <div className="element">
          <button className="button element__delete" type="button">
            <img className="element__delete-icon" src={trash} alt="мусорка"/>
          </button>
          <img className="element__image"/>
          <div className="element__description">
            <h2 className="element__title"></h2>
            <div>
            <button className="button element__like" type="button">
              <img className="element__like-icon" src={heart} alt="сердечко"/>
            </button>
            <div className="element__counter">0</div>
          </div>
          </div>
         
        </div>
      </template>
    </section>
*/}



  </main>
  
  );
}
  
export default Main;


{/* <EditAvatarPopup
isOpen={isEditAvatarPopupOpen}
onClose={closeAllPopups}
/>
<EditProfilePopup
isOpen={isEditProfilePopupOpen}
onClose={closeAllPopups}
/>
<AddPlacePopup
isOpen={isAddPlacePopupOpen}
onClose={closeAllPopups}
/> */}