import { createContext, useState, useEffect } from "react";

const Shome_Context = createContext();

function ShomeProvider({ children }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [webResponsiveStyle, setWebResponsiveStyle] = useState("");

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    if(windowWidth <= 576) {
      setWebResponsiveStyle("is-phone");
    } else if(windowWidth >= 740 && windowWidth <= 1113) {
      setWebResponsiveStyle("is-tablet");
    } else {
      setWebResponsiveStyle("is-pc");
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  const value = {
    webResponsiveStyle
  };

  return <Shome_Context.Provider value={value}>{children}</Shome_Context.Provider>;
}

export default ShomeProvider;

export { Shome_Context, ShomeProvider };
