import api from "../utils/Api";
import { useEffect, useState } from "react";
import Card from "./Card";
function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName, setUserName] = useState([]);
  const [userDescription, setUserDescription] = useState([]);
  const [userAvatar, setUserAvatar] = useState([]);
  const [cards, getCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getCurrentUser(), api.getInitialCards()])
      .then(([currentUser, cards]) => {
        setUserName(currentUser.name);
        setUserDescription(currentUser.about);
        setUserAvatar(currentUser.avatar);
        getCards(cards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__container">
          <button onClick={onEditAvatar} type="button" className="profile__avatar-button">
            <img src={userAvatar} alt="Аватар профиля" className="profile__avatar" />
          </button>
          <div className="profile__info">
            <h1 className="profile__name">{userName}</h1>
            <button onClick={onEditProfile} type="button" className="profile__edit-button"></button>
            <p className="profile__caption">{userDescription}</p>
          </div>
        </div>
        <button onClick={onAddPlace} type="button" className="profile__add-button"></button>
      </section>
      <section className="cards-grid">
        <ul className="cards-grid__list">
          {cards.map((card) => {
            return <Card card={card} key={card._id} onCardClick={onCardClick} />;
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
