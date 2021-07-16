import "./Card.css";
const Card = () => {
  const card1 = {
    title: "Random Name",
    tag: "Image Explorer",
    pins: 1896,
    mainImg: "https://picsum.photos/200/300?random=9",
    img1: "https://randomwordgenerator.com/img/picture-generator/tractor-371250_640.jpg",
    img2: "https://randomwordgenerator.com/img/picture-generator/54e7d4404f54ab14f1dc8460962e33791c3ad6e04e50744172277ed79145c0_640.jpg",
    img3: "https://randomwordgenerator.com/img/picture-generator/52e0d746495bac14f1dc8460962e33791c3ad6e04e50744172297cd6904bc7_640.jpg",
  };
  const card2 = {
    title: "Random Name",
    tag: "Image Explorer",
    pins: 496,
    mainImg: "https://picsum.photos/200/300?random=10",
    img1: "https://picsum.photos/200/300?random=1",
    img2: "https://picsum.photos/200/300?random=2",
    img3: "https://picsum.photos/200/300?random=3",
  };
  const card3 = {
    title: "Random Name",
    tag: "Image Explorer",
    pins: 196,
    mainImg: "https://picsum.photos/200/300?random=7",
    img1: "https://picsum.photos/200/300?random=11",
    img2: "https://picsum.photos/200/300?random=22",
    img3: "https://picsum.photos/200/300?random=33",
  };
  const Card = ({ card }) => {
    return (
      <div className="card">
        <h3>{card.title}</h3>
        <p>{card.tag}</p>
        <div className="mainImg">
          <img src={card.mainImg} alt="main pic" />
          <p className="pin">📌{card.pins}</p>
        </div>
        <div className="miniImages">
          <img src={card.img1} alt="mini pic" />
          <img src={card.img2} alt="mini pic" />
          <img src={card.img3} alt="mini pic" />
        </div>
        <button>Follow</button>
      </div>
    );
  };
  return (
    <main>
      <div className="cards__wrapper">
        <Card card={card1} />
        <Card card={card3} />
        <Card card={card2} />
        <Card card={card1} />
        <Card card={card2} />
        <Card card={card3} />
      </div>
    </main>
  );
};
export default Card;
