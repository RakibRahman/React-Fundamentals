import { useReducer } from "react";

interface StateProps {
  user: string;
  password: string | number;
  loading: boolean;
  isLoggedIn: boolean;
} 
type Action =
  | {
      type: "handleInputText";
      field: string;
      payload: string;
    }
  | { type: "clearInput" }
  | { type: "isLoggedIn" }
  | { type: "loading" };

const reducer = (state: StateProps, action: Action): StateProps => {
  switch (action.type) {
    case "handleInputText":
      return { ...state, [action.field]: action.payload };
    case "loading": {
      return { ...state, loading: !state.loading };
    }
    case "isLoggedIn":
      return { ...state, isLoggedIn: !state.isLoggedIn };

    case "clearInput":
      return { ...state, user: "", password: "" };
    default:
      return state;
  }
};
export const LogIn = () => {
  const initState = {
    user: "",
    password: "",

    loading: false,
    isLoggedIn: false,
  };

  const [state, dispatch] = useReducer(reducer, initState);
  const onChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "handleInputText",
      field: e.target.name,
      payload: e.target.value,
    });
  };

  const onHandleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    await setTimeout(() => {
      dispatch({ type: "loading" });
      dispatch({ type: "isLoggedIn" });
      alert(`Welcome ${state.user}`);
    }, 1000);
  };
  return (
    <div>
      <h2>{state.isLoggedIn ? `Welcome ${state.user}` : `Please log in`}</h2>

      <form onSubmit={onHandleSubmit}>
        {!state.loading && (
          <>
            <label htmlFor="user">
              <input
                type="text"
                id="user"
                name="user"
                placeholder="enter your username"
                onChange={(e) => onChangeHandle(e)}
                value={state.user}
              />
            </label>
            <label htmlFor="password">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="enter your password"
                onChange={(e) => onChangeHandle(e)}
                value={state.password}
              />
            </label>
            <button type="submit">LogIn</button>
          </>
        )}
        {state.loading && (
          <button
            type="button"
            onClick={() => {
              dispatch({ type: "loading" });
              dispatch({ type: "isLoggedIn" });
              dispatch({ type: "clearInput" });
            }}
          >
            LogOut
          </button>
        )}
      </form>
    </div>
  );
};
