import "./Card.css";

const Card = ({ image, title, text }) => {
  return (
    <div className="poster">
      <div>
        <img src={image} alt="pic" />
      </div>
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  );
};

export default Card;
