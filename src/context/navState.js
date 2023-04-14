import { useReducer } from "react";
import NavContext from "./navContext";

const type = {
  NAV: "NAV",
  MOBILE_MENU: "MOBILE_MENU",
};

const navReducer = (state, action) => {
  switch (action.type) {
    case type.NAV:
      return {
        ...state,
        nav: action.payload,
      };
    case type.MOBILE_MENU:
      return {
        ...state,
        mobileMenu: action.payload,
      };

    default:
      return state;
  }
};

const NavState = (props) => {
  const initialState = {
    nav: "home",
    mobileMenu: false,
  };
  const [state, dispatch] = useReducer(navReducer, initialState);

  const changeNav = (value) => {
    dispatch({
      type: type.NAV,
      payload: value,
    });
  };
  const changeMobileMenu = (value) => {
    console.log(value);
    dispatch({
      type: type.MOBILE_MENU,
      payload: value,
    });
  };
  return (
    <NavContext.Provider
      value={{
        changeNav: changeNav,
        nav: state.nav,
        mobileMenu: state.mobileMenu,
        changeMobileMenu: changeMobileMenu,
      }}
    >
      {props.children}
    </NavContext.Provider>
  );
};

export default NavState;
