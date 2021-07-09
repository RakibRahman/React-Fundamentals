import "./Posts.css";
import logo from "./../logo.svg";
const name = "Pain";

function WelcomePage() {
  return (
    <p className="hello">
      Welcome to the world of React <br /> Enjoy it
    </p>
  );
}

function Article() {
  return (
    <div className="article__body">
      <div className="article__card">
        <img src={logo} className="App-logo" alt="logo" />

        <h1>{name}</h1>
        <WelcomePage></WelcomePage>
      </div>
      <div className="article__card">
        <img src={logo} className="App-logo" alt="logo" />

        <h1>Title</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil minima
          distinctio a excepturi nobis hic perferendis soluta quibusdam ex id
          eos adipisci expedita modi in, ea aut necessitatibus quas iste.
        </p>
      </div>
      <div className="article__card">
        <img src={logo} className="App-logo" alt="logo" />

        <h1>Title</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil minima
          distinctio a excepturi nobis hic perferendis soluta quibusdam ex id
          eos adipisci expedita modi in, ea aut necessitatibus quas iste.
        </p>
      </div>
      <div className="article__card">
        <img src={logo} className="App-logo" alt="logo" />

        <h1>Title</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil minima
          distinctio a excepturi nobis hic perferendis soluta quibusdam ex id
          eos adipisci expedita modi in, ea aut necessitatibus quas iste.
        </p>
      </div>
      <div className="article__card">
        <img src={logo} className="App-logo" alt="logo" />

        <h1>Title</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil minima
          distinctio a excepturi nobis hic perferendis soluta quibusdam ex id
          eos adipisci expedita modi in, ea aut necessitatibus quas iste.
        </p>
      </div>
      <div className="article__card">
        <img src={logo} className="App-logo" alt="logo" />

        <h1>Title</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil minima
          distinctio a excepturi nobis hic perferendis soluta quibusdam ex id
          eos adipisci expedita modi in, ea aut necessitatibus quas iste.
        </p>
      </div>
    </div>
  );
}
export default Article;
