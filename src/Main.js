import React from 'react';

function Main() {
  return (
    
    <main className="page__content">
    <section className="profile">
      <div className="profile__avatar">
      <img className="profile__avatar-pic" src="<%=require('./images/avatar.jpg')%>" alt="туть должен быть аватар :("/>
    </div>
      <div className="profile__info">
        <h1 className="profile__name">Валерочка</h1>
        <button className="button profile__edit" type="button">
          <img className="profile__edit-icon" src="<%=require('./images/pencil.svg')%>" alt="карандашик"/>
        </button>
        <h2 className="profile__job">Исследователь гаража</h2>
      </div>

      <button className="button profile__add" type="button">
        <img className="profile__add-icon" src="<%=require('./images/plus.svg')%>" alt="плюсик"/>
      </button>

    </section>

    <section className="elements">
      <template id="element" className="elements-template_type_default">
        <div className="element">
          <button className="button element__delete" type="button">
            <img className="element__delete-icon" src="<%=require('./images/trash.svg')%>" alt="мусорка"/>
          </button>
          <img className="element__image"/>
          <div className="element__description">
            <h2 className="element__title"></h2>
            <div>
            <button className="button element__like" type="button">
              <img className="element__like-icon" src="<%=require('./images/heart.svg')%>" alt="сердечко"/>
            </button>
            <div className="element__counter">0</div>
          </div>
          </div>
         
        </div>
      </template>
    </section>
  </main>
  
  );
}
  
export default Main;