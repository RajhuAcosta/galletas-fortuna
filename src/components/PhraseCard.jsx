import "./PhraseCard.css";
const PhraseCard = ({prop,handleChangePhrase}) => {
  return (
    <section className="phraseCard">
      <article className="phraseCard__container">
        <h1 className="phraseCard__title">GALLETAS DE LA FORTUNA</h1>
        <button onClick={handleChangePhrase} className="phraseCard__btn">Probar mi suerte</button>
        <p className="phraseCard__phrase">{prop.phrase}</p>
      </article>
      <footer className="phraseCard__footer">Fuente : {prop.author}</footer>
    </section>
  );
};
export default PhraseCard;