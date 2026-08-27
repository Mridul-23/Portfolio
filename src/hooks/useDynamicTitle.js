import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useDynamicTitle = (defaultTitle) => {
  const location = useLocation();

  const routeTitles = {
    "/": "Mridul Narula • AI Engineer",
    "/about": "About • Mridul Narula",
    "/projects": "Projects • Mridul Narula",
    "/tech-stack": "Tech Stack • Mridul Narula",
    "/credentials": "Credentials • Mridul Narula",
    "/social": "Connect • Mridul Narula",
    "*": "404 • Mridul Narula",
  };

  useEffect(() => {
    document.title = routeTitles[location.pathname] || defaultTitle;
  }, [location.pathname, defaultTitle]);
};

export default useDynamicTitle;