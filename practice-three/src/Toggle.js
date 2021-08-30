import "./Toggle.css";
const Toggle = () => {
  let theme = "light-theme";

  const replaceTheme = (newTheme) => {
    document.getElementById(
      "toggleBox"
    ).className = `${newTheme} toggle__wrapper`;
  };
  const onClickHandler = () => {
    if (theme === "light-theme") {
      replaceTheme("dark-theme");
      theme = "dark-theme";
    } else {
      replaceTheme("light-theme");
      theme = "light-theme";
    }
  };
  return (
    <div id="toggleBox" className={`${theme} toggle__wrapper`}>
      <h1>Click to toggle</h1>
      <button onClick={onClickHandler}>Toggle</button>
    </div>
  );
};
export default Toggle;
