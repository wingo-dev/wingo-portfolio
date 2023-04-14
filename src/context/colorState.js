import { useReducer } from "react";
import ColorContext from "./colorContext";

const type = {
  COLOR: "NAV",
};

const navReducer = (state, action) => {
  switch (action.type) {
    case type.COLOR:
      return {
        ...state,
        color: action.payload,
      };

    default:
      return state;
  }
};

const ColorState = (props) => {
  const initialState = {
    color: "yellow",
  };
  const [state, dispatch] = useReducer(navReducer, initialState);

  const changeColor = (value) => {
    dispatch({
      type: type.COLOR,
      payload: value,
    });
  };
  return (
    <ColorContext.Provider
      value={{
        changeColor: changeColor,
        color: state.color,
      }}
    >
      {props.children}
    </ColorContext.Provider>
  );
};

export default ColorState;
