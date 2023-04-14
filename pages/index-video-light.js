import dynamic from "next/dynamic";
import { useContext, useEffect } from "react";
import About from "../src/components/About";
import Blog from "../src/components/Blog";
import Contact from "../src/components/Contact";
import Home from "../src/components/Home";
import ColorContext from "../src/context/colorContext";
import Layouts from "../src/layouts/Layouts";
const Work = dynamic(() => import("../src/components/Work"), {
  ssr: false,
});
const IndexVideoLight = () => {
  const { changeColor } = useContext(ColorContext);
  useEffect(() => {
    changeColor("red");
  }, []);
  return (
    <Layouts bodyCls={"light dark-header bgvideo"} light>
      {/* Back To Home Ends [ONLY MOBILE] */}
      {/* Home Section Starts */}
      <Home leftImg leftImgSrc="img/videolight.jpg" video />
      {/* Home Section Ends */}
      {/* About Section Starts */}
      <About />
      {/* About Section Ends */}
      {/* Portfolio Section Starts */}
      <Work />
      {/* Portfolio Section Ends */}
      {/* Contact Section Starts */}
      <Contact />
      {/* Contact Section Ends */}
      {/* Blog Section Starts */}
      <Blog />
    </Layouts>
  );
};
export default IndexVideoLight;
