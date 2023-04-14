import Head from "next/head";
import { Fragment, useContext, useEffect } from "react";
import ColorContext from "../context/colorContext";
import NavContext from "../context/navContext";
import useWindowSize from "../useWindowSize";
import BackMobile from "./BackMobile";
import Header from "./Header";
import Switcher from "./Switcher";

const Layouts = ({ children, bodyCls, extraPage, light }) => {
  useEffect(() => {
    document.querySelector("body").classList = bodyCls
      ? bodyCls
      : "dark fullscreendark";
  }, []);
  const { changeMobileMenu, mobileMenu } = useContext(NavContext);
  const { color } = useContext(ColorContext);
  const { width } = useWindowSize();
  useEffect(() => {
    if (width > 1025) {
      changeMobileMenu(false);
    }
  }, [width]);
  return (
    <Fragment>
      <Head>
        <link
          type="text/css"
          media="all"
          href={`css/skins/${color}.css`}
          rel="stylesheet"
        />{" "}
        <title>Istanbul - Personal Portfolio</title>
      </Head>
      <div className="page animated" style={{ animationDuration: "500ms" }}>
        <Switcher />
        {/* Header Starts */}
        {!extraPage && <Header light={light} />}
        {/* Main Content Starts */}{" "}
        {extraPage ? (
          children
        ) : (
          <main
            id="main"
            className={`${width < 1025 ? (mobileMenu ? "open" : "") : ""}`}
          >
            {/* Back To Home Starts [ONLY MOBILE] */}
            <BackMobile
              changeMobileMenu={changeMobileMenu}
              mobileMenu={mobileMenu}
            />
            {children}
          </main>
        )}
      </div>{" "}
    </Fragment>
  );
};
export default Layouts;
