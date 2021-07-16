import "./Header.css";

const Header = () => {
  const Logo = () => (
    <div className="logo">
      <img
        src="https://img.icons8.com/officel/80/000000/gallery.png"
        alt="logo"
      />
      <h1>Image Explorer</h1>
    </div>
  );
  const Navigation = ({ boards, pins, likes, followers, following }) => {
    return (
      <nav>
        <div className="line"></div>
        <ul className="links">
          <li>
            <p>{boards}</p>
            <p>Boards</p>
          </li>
          <li>
            <p>{pins}</p>
            <p>Pins</p>
          </li>
          <li>
            <p>{likes}</p>
            <p>Likes</p>
          </li>
          <li>
            <p>{followers}</p>
            <p>Followers</p>
          </li>
          <li>
            <p>{following}</p>
            <p>Following</p>
          </li>
        </ul>
        <div className="line"></div>
      </nav>
    );
  };
  return (
    <header>
      <Logo />
      <Navigation
        boards={37}
        pins={24 + "k"}
        likes={184}
        followers={8.9 + "k"}
        following={1.8 + "k"}
      />
    </header>
  );
};
export default Header;
