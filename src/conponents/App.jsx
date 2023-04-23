import { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import "../index.css";

function App() {
  document.body.style.backgroundColor = "#000";

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setImagePopupOpen] = useState(false);

  const [selectedCard, setSelectedCard] = useState({});

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleCardClick(card) {
    setSelectedCard(card);
    setImagePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setImagePopupOpen(false);
    setSelectedCard({});
  }

  return (
    <div className="container">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />

      <PopupWithForm
        name="edit-profile"
        title="Редактировать профиль"
        buttonText="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          type="text"
          minLength="2"
          maxLength="40"
          required
          name="input_type_name"
          id="name"
          className="pop-up__input pop-up__input_type_name"
          placeholder="Имя"
        />
        <span id="name-error" className="pop-up__error"></span>
        <input
          id="job"
          type="text"
          minLength="2"
          maxLength="200"
          required
          name="input_type_job"
          className="pop-up__input pop-up__input_type_job"
          placeholder="О себе"
        />
        <span id="job-error" className="pop-up__error"></span>
      </PopupWithForm>

      <PopupWithForm name="avatar-update" title="Обновить аватар" buttonText="Сохранить" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <input id="avatar-url" type="url" required name="link" className="pop-up__input pop-up__input_type_link" placeholder="Ссылка на картинку" />
        <span id="avatar-url-error" className="pop-up__error"></span>
      </PopupWithForm>

      <PopupWithForm name="add-card" title="Новое место" buttonText="Создать" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <input
          id="place"
          type="text"
          minLength="2"
          maxLength="30"
          required
          name="name"
          className="pop-up__input pop-up__input_type_place"
          placeholder="Название"
        />
        <span id="place-error" className="pop-up__error"></span>
        <input id="url" type="url" required name="link" className="pop-up__input pop-up__input_type_link" placeholder="Ссылка на картинку" />
        <span id="url-error" className="pop-up__error"></span>
      </PopupWithForm>

      <PopupWithForm name="confirm" title="Вы уверены" buttonText="Да"></PopupWithForm>

      <ImagePopup card={selectedCard} isOpen={isImagePopupOpen} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
