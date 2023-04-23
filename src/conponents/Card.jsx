export default function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }
  return (
    <li className="cards-grid__card card">
      <div className="card__image-container">
        <img src={card.link} alt={card.name} className="card__image" onClick={handleClick} />
      </div>
      <button type="button" className="card__delete-button"></button>
      <div className="card__caption-container">
        <h2 className="card__caption">{card.name}</h2>
        <div className="card__like-container">
          <button type="button" className="card__like-button"></button>
          <p className="card__like-counter">{card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}
