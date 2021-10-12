export const LogIn = () => {
  const onHandleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    alert("submitted");
  };
  return (
    <div>
      <form onSubmit={onHandleSubmit}>
        <label htmlFor="user">
          <input type="text" id="user" placeholder="enter your username" />
        </label>
        <label htmlFor="password">
          <input type="text" id="password" placeholder="enter your password" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
