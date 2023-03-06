import React from 'react';
import '../index.css';
import api from '../utils/Api.js';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
import ImagePopup from './ImagePopup.js';
import PopupWithConfirmation from './PopupWithConfirmation.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import EditProfilePopup from './EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';
import AddPlacePopup from './AddPlacePopup.js';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({name: '', link: ''});
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getInitialUserData()
    .then(data => {
      setCurrentUser(data);
    })
    .catch((err) => {
      console.log(err);
    })
  }, [])

  React.useEffect(() => {
    api.getInitialCards()
    .then((dataCard) => {
        setCards(dataCard)
        })
    .catch((err) => {
      console.log(err);
    })
  }, [])

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({name: '', link: ''});
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    api.changeLikeCardStatus(card._id, !isLiked)
    .then((newCard) => {
      setCards(cards => cards.map((c) => c._id === card._id ? newCard : c));
    })
    .catch((err) => {
      console.log(err);
    });
  }

  function handleCardDelete(id) {
    api.deleteCard(id)
    .then((data) => {
      console.log(data)
      setCards(cards => cards.filter((c) => c._id !== id));
    })
    .catch((err) => {
      console.log(err);
    });
  }

  function handleUpdateUser(data){
    api.changeUserData(data)
    .then((data) => {
      setCurrentUser(data);
    })
    .then(() => {
      closeAllPopups();
    })
    .catch((err) => {
      console.log(err);
    });
  }

  function handleUpdateAvatar(data){
    api.setNewAvatar(data.avatar)
    .then((data) => {
      setCurrentUser(data)
    })
    .then(() => {
      closeAllPopups();
    })
    .catch((err) => {
      console.log(err);
    });
  }

  function handleAddPlaceSubmit(data){
    api.addCard(data)
    .then((newCard) => {
      setCards([newCard, ...cards]);
    })
    .then(() => {
      closeAllPopups();
    })
    .catch((err) => {
      console.log(err);
    });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
  <div className="page">
    <Header />
    <Main
    cards={cards}
    onEditProfile={handleEditProfileClick}
    onAddPlace={handleAddPlaceClick}
    onEditAvatar={handleEditAvatarClick}
    onCardClick={setSelectedCard}
    onCardLike={handleCardLike}
    onCardDelete={handleCardDelete}
    />
    <Footer />
    {/*Попап редактирования данных*/}
    <EditProfilePopup
    isOpen={isEditProfilePopupOpen}
    onClose={closeAllPopups}
    onUpdateUser={handleUpdateUser}
    />
    {/*Попап добавления карточек*/}
    <AddPlacePopup
    isOpen={isAddPlacePopupOpen}
    onClose={closeAllPopups}
    onAddPlace={handleAddPlaceSubmit}
    />
    {/*Попап редактирования аватара*/}
    <EditAvatarPopup
    isOpen={isEditAvatarPopupOpen}
    onClose={closeAllPopups}
    onUpdateAvatar={handleUpdateAvatar}
    />
    {/*Попап подтверждения удаления карточки*/}
    <PopupWithConfirmation
    title="Вы уверены?"
    name="delete"
    buttonText="Да"
    />
    {/*Попап отображения большой карточки*/}
    <ImagePopup
    card={selectedCard}
    onClose={closeAllPopups}
    />
  </div>
  </CurrentUserContext.Provider>
  );
}

export default App;