import React from 'react';
import pencil from '../images/pencil.svg';
import plus from '../images/plus.svg';
import api from '../utils/Api.js';
import Card from './Card.js';

function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick}) {
  const [userName, setUserName] = React.useState('Валерочка')
  const [userDescription, setUserDescription] = React.useState('Исследователь гаража')
  const [userAvatar, setUserAvatar] = React.useState('../images/avatar.jpg')
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    const promises = [api.getInitialCards(), api.getPersonInfo()]

    Promise.all(promises)
        .then(([resCard, resUser]) => {
            setUserName(resUser.name);
            setUserDescription(resUser.about);
            setUserAvatar(resUser.avatar);
            setCards(resCard);
        })
        .catch((error) => {
            console.log(error)
        });
}, []);

  
  return (
    <main className="page__content">
    <section className="profile">
      <div className="profile__avatar" onClick={onEditAvatar}>
      <img className="profile__avatar-pic" src={userAvatar} alt="туть должен быть аватар :("/>
    </div>
      <div className="profile__info">
        <h1 className="profile__name">{userName}</h1>
        <button className="button profile__edit" type="button" onClick={onEditProfile}>
          <img className="profile__edit-icon" src={pencil} alt="карандашик"/>
        </button>
        <h2 className="profile__job">{userDescription}</h2>
      </div>

      <button className="button profile__add" type="button" onClick={onAddPlace}>
        <img className="profile__add-icon" src={plus} alt="плюсик"/>
      </button>

    </section>
    <section className="elements">
                {cards.map((card) =>
                    <Card
                        card={card}
                        onCardClick={onCardClick}
                        key={card._id} 
                    />
                )}
            </section>

  </main>
  
  );
}
  
export default Main;

